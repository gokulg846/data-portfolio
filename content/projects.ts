export type DataProject = {
  slug: string;
  index: string;
  type: string;
  title: string;
  summary: string;
  question: string;
  data: string;
  method: string;
  system: string;
  evaluation: string;
  detail: string;
  stack: string[];
  limitations: string[];
  repository: string;
  visibility: 'public' | 'hidden';
};

const allProjects: DataProject[] = [
  {
    slug: 'industrial-sensor-anomaly-detection',
    index: '01',
    type: 'APPLIED ML · TIME SERIES',
    title: 'Industrial Sensor Anomaly Detection',
    summary: 'A review system that learns a healthy bearing baseline, flags unusual vibration windows, and gives reliability engineers control over alert sensitivity.',
    question: 'How can a reliability engineer prioritize unusual equipment signals when healthy history is abundant and labeled failures are scarce?',
    data: 'Public Case Western Reserve University bearing recordings are segmented into overlapping vibration windows. The design keeps neighboring windows together during splitting to reduce leakage between training and evaluation data.',
    method: 'The project compares an Isolation Forest built on signal features with an LSTM autoencoder built on waveform windows. Both learn from healthy operating data, then score new windows by how far they depart from that baseline.',
    system: 'Python handles ingestion, windowing, feature extraction, training, and artifact persistence. A Streamlit review interface loads the saved model, plots anomaly scores, and lets a reviewer adjust sensitivity.',
    evaluation: 'The evaluation design fixes an acceptable false-positive budget, measures recall within that constraint, and slices performance by motor load, fault location, and severity. A pinned reproduction run is the next publication gate.',
    detail: 'Healthy-only training · contiguous splits · threshold calibration',
    stack: ['Python', 'NumPy', 'Pandas', 'SciPy', 'scikit-learn', 'TensorFlow/Keras', 'Joblib', 'Streamlit', 'Matplotlib'],
    limitations: ['The dataset represents controlled laboratory bearings.', 'Plant performance requires validation on equipment-specific signals.', 'Published model metrics await a pinned reproduction run.'],
    repository: 'https://github.com/gokulg846/industry-sensor-anomaly-detection',
    visibility: 'public',
  },
  {
    slug: 'real-time-cargo-flight-tracker',
    index: '02',
    type: 'STREAMING DATA SYSTEM',
    title: 'Real-Time Cargo Flight Tracker',
    summary: 'An event-driven pipeline that filters live OpenSky records and streams selected cargo-flight positions through Redpanda and FastAPI to a browser map.',
    question: 'How can a browser receive and display a focused stream of live cargo-flight positions while keeping ingestion and presentation independently evolvable?',
    data: 'The ingestion service polls OpenSky state vectors and selects records whose callsigns use FDX or UPS prefixes. Each event carries the flight identifier, position, altitude, velocity, heading, and observation time.',
    method: 'The pipeline filters and normalizes records before publishing them to a Kafka-compatible topic. The browser receives the resulting event stream instead of polling the upstream aviation source directly.',
    system: 'A Python producer publishes to Redpanda. FastAPI consumes the topic and forwards events over a WebSocket. React and Leaflet maintain the live map and update markers as positions arrive.',
    evaluation: 'The frontend build has been reproduced at commit fc0ea6f. The next evaluation measures event freshness, reconnect behavior, multi-client delivery, and end-to-end reliability.',
    detail: 'Live ingestion · event transport · browser delivery',
    stack: ['Python', 'OpenSky API', 'Redpanda', 'Kafka protocol', 'FastAPI', 'AsyncIO', 'WebSockets', 'React', 'TypeScript', 'Leaflet', 'Docker Compose'],
    limitations: ['End-to-end reproduction remains open.', 'Latency and reliability require measurement under a controlled run.', 'Cargo operations workflow assumptions require user validation.'],
    repository: 'https://github.com/gokulg846/flight-tracker',
    visibility: 'public',
  },
  {
    slug: 'semiconductor-yield-analytics',
    index: '03',
    type: 'ANALYTICS ENGINEERING',
    title: 'Semiconductor Yield Analytics',
    summary: 'A wafer-investigation workflow connecting die-test results with spatial patterns, process conditions, equipment history, and lot genealogy.',
    question: 'How can a yield engineer move from a low-yield wafer to a defensible next investigation using connected manufacturing data?',
    data: 'Synthetic fab records model lots, wafers, equipment, chambers, process measurements, and die-level tests. Known process and chamber conditions are planted so the full investigation path can be checked.',
    method: 'Transformation models align the records at their correct grains, calculate wafer yield and SPC signals, and join genealogy and equipment context. Spatial views and failure Pareto analysis help narrow the search.',
    system: 'Prefect orchestrates Python ingestion into Parquet. dbt builds tested analytical layers in DuckDB. Streamlit and Plotly provide wafer maps, trends, SPC views, and investigation context.',
    evaluation: 'Seeded excursion scenarios test whether the workflow recovers the planted cause among its top hypotheses. Reconciliation checks confirm source completeness and join behavior.',
    detail: 'Data modeling · SPC · traceable investigation paths',
    stack: ['Python', 'Prefect', 'Parquet', 'dbt', 'DuckDB', 'Streamlit', 'Plotly'],
    limitations: ['The fab records and physical relationships are synthetic.', 'The workflow ranks hypotheses while physical causality requires domain validation.', 'Production control limits require calibration with fab history.'],
    repository: 'https://github.com/gokulg846/Semiconductor-wafer-yield-analysis-pipeline',
    visibility: 'public',
  },
  {
    slug: 'manufacturing-quality-traceability',
    index: '04',
    type: 'DATA QUALITY · TRACEABILITY',
    title: 'Manufacturing Quality Traceability',
    summary: 'A part-level investigation tool that connects inspection, process, torque, and supplier records while making missing traceability visible.',
    question: 'How can a quality engineer inspect every available record for a suspect part while seeing gaps that could weaken the investigation?',
    data: 'Synthetic records represent dimensional inspection, machine process, torque, and supplier material data. Part and batch identifiers form the contract that links the four systems.',
    method: 'The pipeline preserves source records, standardizes identifiers, builds tested joins, and calculates traceability completeness. The interface exposes each linked record and every missing handoff.',
    system: 'Prefect coordinates Python ingestion into Parquet. dbt models Bronze, Silver, and Gold responsibilities in DuckDB. Streamlit presents filters and the part-level evidence view.',
    evaluation: 'Seeded investigation cases measure evidence-assembly time, completeness, unresolved identifier rate, and affected-population recovery against known synthetic ground truth.',
    detail: 'Four source systems · entity contracts · completeness checks',
    stack: ['Python', 'Prefect', 'Parquet', 'dbt', 'DuckDB', 'Streamlit'],
    limitations: ['The records and failure patterns are synthetic.', 'Production thresholds require calibration with plant quality engineers.', 'The prototype supports investigation while production containment remains a governed workflow.'],
    repository: 'https://github.com/gokulg846/Manufacturing-quality-traceabilty',
    visibility: 'public',
  },
];

export const projects = allProjects.filter((project) => project.visibility === 'public');
export const projectBySlug = Object.fromEntries(projects.map((project) => [project.slug, project]));
