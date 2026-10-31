export default async () => {
  const canary = Netlify.env.get("NFX_OWNED_SECRET_CANARY") || "NFX_CANARY_MISSING";

  return new Response(canary, {
    headers: {
      "cache-control": "no-store",
      "content-type": "text/plain; charset=utf-8",
    },
  });
};

export const config = {
  path: "/nfx-canary",
};
