export default async function handler(req, res) {
    const API_KEY = process.env.NEIS_API_KEY;
    const ATPT_CODE = "R10";
    const SCHOOL_CODE = "8750473";

    const today = new Date();
    const yyyymmdd =
        today.getFullYear() +
        String(today.getMonth() + 1).padStart(2, "0") +
        String(today.getDate()).padStart(2, "0");

    const url =
        `https://open.neis.go.kr/hub/mealServiceDietInfo` +
        `?KEY=${API_KEY}` +
        `&Type=json` +
        `&ATPT_OFCDC_SC_CODE=${ATPT_CODE}` +
        `&SD_SCHUL_CODE=${SCHOOL_CODE}` +
        `&MLSV_YMD=${yyyymmdd}`;
        
    try {
        const response = await fetch(url);
        const data = await response.json();
        res.status(200).json(data); //받은 걸 브라우저에 넘김
    } catch (error) {
        res.status(500).json({ error: "급식 데이터 못 불러왔당께요"});
    }
}