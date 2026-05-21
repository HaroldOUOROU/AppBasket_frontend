import { useMemo, useState } from "react";

function buildWhatsAppUrl(phoneDigits, message) {
  const digits = (phoneDigits || "").replace(/\D/g, "");
  const text = encodeURIComponent(message);
  return digits ? `https://wa.me/${digits}?text=${text}` : null;
}

function buildMailtoUrl(email, subject, body) {
  const safeEmail = (email || "").trim();
  if (!safeEmail) return null;

  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);

  const q = params.toString();
  return `mailto:${safeEmail}${q ? `?${q}` : ""}`;
}

function buildLinkOrNull(url) {
  if (!url) return null;
  try {
    return new URL(url).toString();
  } catch {
    return null;
  }
}

export default function ContactCoach({
  coachName = "Coach",
  clubName = "le club",
  contact = {
    whatsappPhone: "22960000000", // placeholder
    email: "coach@example.com", // placeholder
    instagramUrl: "https://instagram.com/example", // placeholder
    facebookUrl: "https://facebook.com/example", // placeholder
  },
  className = "",
}) {
  const [open, setOpen] = useState(false);

  const message = useMemo(() => {
    return `Bonjour ${coachName},\n\nJ’ai eu vos infos sur BasketScoop et j’aimerais plus me renseigner au sujet du club ${clubName}.\nMerci !`;
  }, [coachName, clubName]);

  const subject = `Demande d’informations - ${clubName}`;

  const links = useMemo(() => {
    return {
      whatsapp: buildWhatsAppUrl(contact.whatsappPhone, message),
      email: buildMailtoUrl(contact.email, subject, message),
      instagram: buildLinkOrNull(contact.instagramUrl),
      facebook: buildLinkOrNull(contact.facebookUrl),
    };
  }, [contact, message, subject]);

  const OptionButton = ({ label, icon, href }) => {
    const disabled = !href;

    return (
      <a
        href={href || "#"}
        onClick={(e) => {
          if (disabled) e.preventDefault();
          setOpen(false);
        }}
        className={`flex items-center justify-between gap-3 px-4 py-3 rounded-xl border transition-all text-sm ${
          disabled
            ? "bg-white/20 border-border-light/60 text-text-secondary-light dark:text-text-secondary-dark cursor-not-allowed opacity-70"
            : "bg-white dark:bg-card-dark border-border-light dark:border-border-dark hover:border-orange-basket hover:-translate-y-0.5"
        }`}
      >
        <span className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-orange-basket/10 flex items-center justify-center">
            {icon}
          </span>
          <span className="font-semibold">{label}</span>
        </span>
        <span className="text-xs text-orange-basket font-bold">Ouvrir</span>
      </a>
    );
  };

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border-light dark:border-border-dark text-sm font-semibold text-text-primary-light dark:text-text-primary-dark hover:border-orange-basket hover:text-orange-basket transition-all bg-white/40 dark:bg-card-dark/40"
      >
        <span className="text-base">✉️</span>
        Contacter le coach
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-3 w-[320px] bg-white dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl shadow-lg z-50 overflow-hidden">
          <div className="px-4 py-3 border-b border-border-light dark:border-border-dark">
            <p className="text-sm font-bold text-text-primary-light dark:text-text-primary-dark">
              Choisir un réseau
            </p>
            <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mt-1">
              Message pré-rempli inclus
            </p>
          </div>

          <div className="p-4 flex flex-col gap-3">
            <OptionButton label="WhatsApp" icon="💬" href={links.whatsapp} />
            <OptionButton label="Email (Gmail)" icon="📩" href={links.email} />
            <OptionButton label="Instagram" icon="📸" href={links.instagram} />
            <OptionButton label="Facebook" icon="📘" href={links.facebook} />

            <div className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark px-1 pt-1">
              *Les liens ci-dessus utilisent des numéros/URLs fictifs pour le
              moment.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
