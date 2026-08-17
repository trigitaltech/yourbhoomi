import { answerFaq, isGreeting, wantsHuman } from "@/lib/chat";
import { sendLeadToWhatsApp } from "@/lib/openwa";

function clean(s: unknown, max: number) {
  return String(s ?? "")
    .replace(/[\r\n]+/g, " ")
    .trim()
    .slice(0, max);
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (body.action === "lead") {
    const name = clean(body.name, 80);
    const phone = clean(body.phone, 20);
    const question = clean(body.question, 500);
    const digits = phone.replace(/\D/g, "");
    if (name.length < 2 || digits.length < 10 || digits.length > 15) {
      return Response.json({ error: "Need a name and a valid phone number." }, { status: 400 });
    }
    try {
      await sendLeadToWhatsApp({ name, phone, question });
    } catch (err) {
      console.error(err);
      return Response.json(
        { error: "Could not reach WhatsApp just now. Use the green chat button, or try again." },
        { status: 503 },
      );
    }
    return Response.json({ ok: true });
  }

  const message = clean(body.message, 500);
  if (!message) return Response.json({ error: "Ask a question." }, { status: 400 });

  if (isGreeting(message)) {
    return Response.json({
      reply: "Hi — ask about visits, cost, POA, or the areas we cover, or tap a question below.",
      askLead: false,
    });
  }

  if (wantsHuman(message)) {
    return Response.json({
      reply: "I’ll connect you with an advisor. Please share your name and WhatsApp number.",
      askLead: true,
    });
  }

  const hit = answerFaq(message);
  if (hit) {
    return Response.json({
      reply: hit.answer,
      title: hit.title,
      href: hit.href,
      askLead: false,
    });
  }

  return Response.json({
    reply:
      "I don’t have that in our FAQ yet. Share your name and WhatsApp number and an advisor will reach you.",
    askLead: true,
  });
}
