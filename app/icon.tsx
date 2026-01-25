import { ImageResponse } from "next/og";

// Image metadata
export const size = {
    width: 32,
    height: 32,
};
export const contentType = "image/png";
export const dynamic = "force-static";

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 20,
                    background: "#10b981", // Emerald-500
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    borderRadius: "4px",
                    fontWeight: 700,
                    fontFamily: "sans-serif",
                }}
            >
                M
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    );
}
