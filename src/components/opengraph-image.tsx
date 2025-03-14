import { ImageResponse } from "next/og";

// Image metadata
export const alt =
  "VarsIT | Profesjonalne strony internetowe dla lokalnych firm";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Font loading function
async function loadFont() {
  const interSemiBold = fetch(
    new URL(
      "https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2",
      import.meta.url,
    ),
  ).then((res) => res.arrayBuffer());

  const interRegular = fetch(
    new URL(
      "https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2",
      import.meta.url,
    ),
  ).then((res) => res.arrayBuffer());

  const interBold = fetch(
    new URL(
      "https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2",
      import.meta.url,
    ),
  ).then((res) => res.arrayBuffer());

  return {
    interSemiBold: await interSemiBold,
    interRegular: await interRegular,
    interBold: await interBold,
  };
}

export default async function Image() {
  const { interSemiBold, interRegular, interBold } = await loadFont();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          fontFamily: "Inter",
          background: "#FAFAFA",
          overflow: "hidden",
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "75%",
            height: "100%",
            opacity: 0.05,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238200db' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Content container */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            height: "100%",
            padding: 60,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Top section with logo */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 50,
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  background: "#8200db",
                  width: 60,
                  height: 60,
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 16,
                  fontSize: 30,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                V
              </div>
              <div
                style={{ fontSize: 48, fontWeight: "bold", color: "#111827" }}
              >
                VarsIT
              </div>
            </div>
            <div style={{ color: "#6b7280", fontSize: 28 }}>
              <span style={{ color: "#8200db", fontWeight: "bold" }}>
                varsit.pl
              </span>{" "}
              | kontakt@varsit.pl
            </div>
          </div>

          {/* Main content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 700,
            }}
          >
            <div
              style={{
                fontSize: 54,
                fontWeight: "bold",
                color: "#111827",
                lineHeight: 1.1,
                marginBottom: 30,
              }}
            >
              Twoja firma
              <span style={{ color: "#8200db" }}> zasługuje </span>
              na profesjonalną stronę
            </div>

            <div
              style={{
                height: 3,
                width: 100,
                background: "#8200db",
                marginBottom: 30,
              }}
            />

            <div
              style={{
                fontSize: 22,
                color: "#4b5563",
                lineHeight: 1.5,
                marginBottom: 40,
              }}
            >
              Projektujemy i wdrażamy wysokiej jakości strony internetowe, które
              zwiększają widoczność firm w internecie i przyciągają nowych
              klientów.
            </div>

            {/* Features */}
            <div
              style={{
                display: "flex",
                gap: 80,
                marginTop: 5,
                width: "100%",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    color: "#8200db",
                    fontSize: 28,
                    fontWeight: "bold",
                  }}
                >
                  01
                </div>
                <div
                  style={{
                    fontSize: 24,
                    color: "#374151",
                    whiteSpace: "nowrap",
                  }}
                >
                  Responsywny design
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    color: "#8200db",
                    fontSize: 28,
                    fontWeight: "bold",
                  }}
                >
                  02
                </div>
                <div
                  style={{
                    fontSize: 24,
                    color: "#374151",
                    whiteSpace: "nowrap",
                  }}
                >
                  Optymalizacja SEO
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    color: "#8200db",
                    fontSize: 28,
                    fontWeight: "bold",
                  }}
                >
                  03
                </div>
                <div
                  style={{
                    fontSize: 24,
                    color: "#374151",
                    whiteSpace: "nowrap",
                  }}
                >
                  Szybkość działania
                </div>
              </div>
            </div>
            {/* Bottom tag */}
            <div
              style={{
                marginTop: 30,
                fontSize: 20,
                color: "#6b7280",
                fontStyle: "italic",
              }}
            >
              Twój partner w cyfrowym rozwoju
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: interSemiBold,
          style: "normal",
          weight: 600,
        },
        {
          name: "Inter",
          data: interRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Inter",
          data: interBold,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
