function withValidProperties(
  properties: Record<string, undefined | string | string[]>,
) {
  return Object.fromEntries(
    Object.entries(properties).filter(([key, value]) => {
      if (Array.isArray(value)) {
        return value.length > 0;
      }
      return !!value;
    }),
  );
}

export async function GET() {
  return Response.json({
    accountAssociation: {
      header: "",
      payload: "",
      signature: "",
    },
    frame: withValidProperties({
      version: "1",
      name: "MiniKit Snake",
      subtitle: "",
      description: "",
      screenshotUrls: [],
      iconUrl: "",
      splashImageUrl: "",
      splashBackgroundColor: "#000000",
      homeUrl: "",
      webhookUrl: "/api/webhook",
      primaryCategory: "",
      tags: [],
      heroImageUrl: "",
      tagline: "",
      ogTitle: "",
      ogDescription: "",
      ogImageUrl: "",
    }),
  });
}
