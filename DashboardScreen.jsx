/**
 * DLang Basketball Demo — Worker entry point.
 *
 * Currently this is a static SPA, so this Worker only handles future /api/*
 * routes. Static asset requests are routed automatically by Cloudflare based
 * on the assets binding in wrangler.jsonc.
 *
 * When you're ready to add real backend logic (Stripe webhooks, Resend email
 * sends, Supabase queries via Hyperdrive, etc.), add cases to the switch
 * below.
 */
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // API routes live here — wrangler.jsonc routes /api/* to this worker first.
    if (url.pathname.startsWith('/api/')) {
      return handleApi(request, env, ctx);
    }

    // Anything else: defer to static assets (handled automatically by the
    // assets binding because /api/* is the only run_worker_first pattern,
    // but we include this for safety / future-proofing).
    return env.ASSETS.fetch(request);
  }
};

async function handleApi(request, env, ctx) {
  const url = new URL(request.url);

  switch (url.pathname) {
    case '/api/health':
      return Response.json({
        status: 'ok',
        timestamp: new Date().toISOString()
      });

    // Add real endpoints here as you build them out:
    //
    //   case '/api/send-reminders':  // Resend batch send
    //   case '/api/stripe-webhook':  // Stripe payment events
    //   case '/api/ai-draft':        // Anthropic Claude API call
    //
    default:
      return new Response('Not found', { status: 404 });
  }
}
