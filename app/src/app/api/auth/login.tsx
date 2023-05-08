import cookie from "cookie";

export default async function handler(req: any, res: any) {

    const { email, password } = req.body;

    // Fetch data to validate the user
    const response = {
        accessToken: "123456789",
    }

    // Create a session cookie
    res.setHeader(
        "Set-Cookie",
        cookie.serialize("accessToken", JSON.stringify(response), {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            maxAge: 60 * 60,
            sameSite: "strict",
            path: "/",
        })
    );

    res.status(200).json({ success: true });
}