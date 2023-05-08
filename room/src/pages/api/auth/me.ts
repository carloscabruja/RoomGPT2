export default async function handler(req: NextApiRequest, res: NextApiResponse) { 
    const accessToken = req.cookies.accessToken;
    res.status(200).json({ accessToken });
}