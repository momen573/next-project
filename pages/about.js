// pages/about.js

export async function getServerSideProps() {
    const res = await fetch('http://localhost:8080/index.php?r=api/data'); // ← آدرس واقعی API خودت رو اینجا بذار
    const json = await res.json();

    return {
        props: {
            apiStatus: json.status,
            apiData: json.data,
        },
    };
}


export default function About({ apiStatus, apiData }) {
    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <h1>صفحه درباره ما</h1>

            <h2>وضعیت پاسخ API: {apiStatus}</h2>

            {apiData ? (
                <div style={{ background: '#f9f9f9', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
                    <p><strong>ID:</strong> {apiData.id}</p>
                    <p><strong>نام:</strong> {apiData.name}</p>
                    <p><strong>نوع:</strong> {apiData.type}</p>
                    <p><strong>توضیحات:</strong> {apiData.description}</p>
                </div>
            ) : (
                <p>داده‌ای یافت نشد.</p>
            )}
        </div>
    );
}
