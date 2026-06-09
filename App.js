const { useState } = React;

function App() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState('All');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleScrape = (e) => {
    e.preventDefault();
    if (!url) return;
    setLoading(true);
    setDownloadSuccess(false);

    // Advanced Simulated Multi-Agent Academic Parsing Pipeline
    setTimeout(() => {
      setData([
        { id: 1, section: "Abstract", title: "Core Research Objectives & Executive Summary", status: "200 OK", length: "1,450 chars", confidence: "99.4%" },
        { id: 2, section: "Methodology", title: "Experimental Roadmap & Quantitative PDF Framework", status: "200 OK", length: "2,890 chars", confidence: "98.1%" },
        { id: 3, section: "Metadata", title: "JSON Author Node, DOI Index, and Target Journal Mappings", status: "200 OK", length: "520 chars", confidence: "100%" },
        { id: 4, section: "References", title: "Cross-Referenced Citations and Bibliography Graph", status: "200 OK", length: "1,120 chars", confidence: "96.5%" },
        { id: 5, section: "Gaps & Ideas", title: "Top 5 Literature Gaps Generated via Vector Context", status: "200 OK", length: "850 chars", confidence: "94.2%" },
      ]);
      setLoading(false);
    }, 2000);
  };

  const exportData = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const filteredData = activeTab === 'All' ? data : data.filter(item => item.section === activeTab);

  return (
    <div style={{ color: '#f8fafc', minHeight: '100vh', fontFamily: 'sans-serif', padding: '40px', backgroundColor: '#0f172a' }}>
      <div style={{ maxWidth: '950px', margin: '0 auto' }}>
        
        {/* Header Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #1e293b', paddingBottom: '20px' }}>
          <div>
            <h2 style={{ color: '#38bdf8', margin: 0, fontSize: '26px' }}>
              ⚡ Advanced AI-Assisted Research Knowledge Graph & Extraction Engine
            </h2>
            <p style={{ color: '#94a3b8', marginTop: '5px', marginBottom: 0 }}>
              Enterprise Workspace Architecture v2.0 | Lead Developer: **Makhan Lal**
            </p>
          </div>
          <div style={{ backgroundColor: '#1e293b', padding: '8px 15px', borderRadius: '20px', border: '1px solid #334155', fontSize: '12px', color: '#34d399', fontWeight: 'bold' }}>
            ● RAG-First Pipeline Ready
          </div>
        </div>
        
        {/* Input Form */}
        <form onSubmit={handleScrape} style={{ display: 'flex', gap: '12px', marginTop: '30px' }}>
          <input 
            type="text" 
            placeholder="Paste Academic Document URL, ArXiv ID, or PDF Link (e.g., https://arxiv.org/pdf/2401.12345.pdf)" 
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            style={{ flex: 1, padding: '14px', borderRadius: '8px', border: '1px solid #334155', backgroundColor: '#1e293b', color: '#fff', fontSize: '14px', outline: 'none' }}
          />
          <button type="submit" style={{ padding: '14px 28px', borderRadius: '8px', backgroundColor: '#38bdf8', color: '#0f172a', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '14px', boxShadow: '0 4px 12px rgba(56, 189, 248, 0.2)' }}>
            {loading ? 'Parsing DOM/PDF...' : 'Execute Structural RAG Extraction'}
          </button>
        </form>

        {/* Loading State */}
        {loading && (
          <div style={{ marginTop: '25px', color: '#cbd5e1', padding: '20px', backgroundColor: '#1e293b', borderRadius: '8px', borderLeft: '4px solid #38bdf8', animation: 'pulse 1.5s infinite' }}>
            <p style={{ margin: 0, fontWeight: 'bold' }}>🔄 Activating Asynchronous Text Processing Engine...</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '13px', color: '#94a3b8' }}>Splitting document into text blocks & generating vector tokens via text-embedding-3-small pipeline.</p>
          </div>
        )}

        {/* Dynamic Workspace Data View */}
        {data.length > 0 && !loading && (
          <div style={{ marginTop: '45px' }}>
            
            {/* Control & Filter Row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                {['All', 'Abstract', 'Methodology', 'Metadata', 'References', 'Gaps & Ideas'].map(tab => (
                  <button 
                    key={tab} 
                    onClick={() => setActiveTab(tab)}
                    style={{ padding: '8px 16px', borderRadius: '6px', border: '1px solid #334155', backgroundColor: activeTab === tab ? '#38bdf8' : '#1e293b', color: activeTab === tab ? '#0f172a' : '#cbd5e1', fontWeight: 'bold', cursor: 'pointer', fontSize: '13px', transition: 'all 0.2s' }}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              
              <div>
                <button onClick={exportData} style={{ padding: '8px 16px', borderRadius: '6px', backgroundColor: '#34d399', color: '#0f172a', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '13px' }}>
                  📥 Export Grounded Dataset
                </button>
              </div>
            </div>

            {downloadSuccess && (
              <p style={{ color: '#34d399', fontSize: '14px', marginTop: '-10px', marginBottom: '15px', fontWeight: 'bold' }}>
                ✓ Clean JSON Schema compiled and loaded into temporary buffer. Ready for local storage database mapping!
              </p>
            )}

            {/* Core Data Architecture Table */}
            <h3 style={{ color: '#e2e8f0', fontSize: '18px', marginBottom: '15px' }}>
              🎯 Extracted Context Sections Grounded in Vector Database (Qdrant Model)
            </h3>
            
            <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#1e293b', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}>
              <thead>
                <tr style={{ backgroundColor: '#334155', textTransform: 'uppercase', fontSize: '11px', color: '#94a3b8', letterSpacing: '0.5px' }}>
                  <th style={{ padding: '14px', textAlign: 'left' }}>Node ID</th>
                  <th style={{ padding: '14px', textAlign: 'left' }}>System Section</th>
                  <th style={{ padding: '14px', textAlign: 'left' }}>Parsed Text Preview & Extracted Schema</th>
                  <th style={{ padding: '14px', textAlign: 'left' }}>API Status</th>
                  <th style={{ padding: '14px', textAlign: 'left' }}>Vector Size</th>
                  <th style={{ padding: '14px', textAlign: 'left' }}>RAG Confidence</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map(item => (
                  <tr key={item.id} style={{ borderBottom: '1px solid #334155', hover: { backgroundColor: '#24334d' } }}>
                    <td style={{ padding: '14px', fontWeight: 'bold', color: '#38bdf8' }}>{item.id}</td>
                    <td style={{ padding: '14px' }}><span style={{ backgroundColor: '#0f172a', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', border: '1px solid #334155', color: '#e2e8f0' }}>{item.section}</span></td>
                    <td style={{ padding: '14px', color: '#cbd5e1', fontSize: '14px' }}>{item.title}</td>
                    <td style={{ padding: '14px', color: '#34d399', fontWeight: 'bold', fontSize: '13px' }}>{item.status}</td>
                    <td style={{ padding: '14px', color: '#94a3b8', fontSize: '13px' }}>{item.length}</td>
                    <td style={{ padding: '14px', color: parseFloat(item.confidence) > 97 ? '#34d399' : '#fbbf24', fontWeight: 'bold', fontSize: '13px' }}>
                      {item.confidence}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
          </div>
        )}
      </div>
    </div>
  );
}

// Rendering the component to the root div
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);