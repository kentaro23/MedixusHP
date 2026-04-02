export type Module = {
  id: string;
  label: string;
  summary: string;
  points: string[];
};

export const osModules: Module[] = [
  {
    id: "flow",
    label: "Flow",
    summary: "予約・問診・呼び出しを一連の導線として設計",
    points: ["予約", "問診", "呼び出し"]
  },
  {
    id: "connect",
    label: "Connect",
    summary: "LINE・電話・Webを統合し、患者接点を単一レイヤーへ",
    points: ["LINE連携", "自動架電", "接点統合"]
  },
  {
    id: "care",
    label: "Care",
    summary: "来院後のフォローを継続運用へ変換",
    points: ["フォローアップ", "継続管理", "リマインド自動化"]
  },
  {
    id: "intelligence",
    label: "Intelligence",
    summary: "重症化リスクを予測し、先回りで介入",
    points: ["重症化予測AI", "優先度判定", "アラート最適化"]
  },
  {
    id: "remote",
    label: "Remote",
    summary: "遠隔モニタリングとオンライン診療連携を実装",
    points: ["遠隔モニタリング", "オンライン連携", "将来SaMD接続"]
  }
];

export const urgencySignals = [
  {
    title: "医療人材の逼迫",
    body: "人手不足は局所改善では追いつかないフェーズへ。運営設計そのものの刷新が必要。"
  },
  {
    title: "慢性疾患の増加",
    body: "単発診療中心の運用では継続管理が破綻。予防・早期介入へ重心を移す必要がある。"
  },
  {
    title: "高齢者接点の再設計",
    body: "デジタル前提ではなく、電話・LINE・対面を跨ぐユニバーサルUXが求められる。"
  },
  {
    title: "AI実装の現実化",
    body: "推論性能と運用基盤の進化で、重症化予測や優先度判定が現場で機能し始めた。"
  },
  {
    title: "体験統合のタイミング",
    body: "予約から診療後フォローまでを一本化できる技術条件が整った。今が転換点。"
  }
];

export const differentiationAxes = [
  {
    axis: "患者接点",
    old: "チャネルごとに分断。履歴がつながらない",
    medixus: "LINE / 電話 / Web / 来院を一つの患者ストリームとして統合"
  },
  {
    axis: "業務自動化",
    old: "スタッフの手作業で調整し続ける運用",
    medixus: "予約前後・再診勧奨・フォローをポリシー駆動で自動化"
  },
  {
    axis: "慢性疾患フォロー",
    old: "診療の都度、点で対応",
    medixus: "来院外も含む継続的なケア運用を標準機能として提供"
  },
  {
    axis: "AIリスク判定",
    old: "異常を発見した後に対応",
    medixus: "重症化予兆を検知し、優先度順に介入アクションを提示"
  },
  {
    axis: "拡張性",
    old: "単機能SaaSの機能追加に留まる",
    medixus: "SaMD / ウェアラブル / 音声UIに拡張可能な医療OSアーキテクチャ"
  }
];

export const futureVectors = [
  {
    title: "Voice Care Layer",
    text: "音声対話で高齢者の継続フォローを自然化。入力負荷を下げながら状態変化を検知。"
  },
  {
    title: "Wearable Bridge",
    text: "リング・ネックレス等の生体シグナルを運営判断へ接続。異常兆候の早期検知を強化。"
  },
  {
    title: "Autonomous Clinic Ops",
    text: "受付・リマインド・再診勧奨・フォローアップを自律実行し、医療者は判断に集中。"
  },
  {
    title: "SaMD / Decision Support",
    text: "臨床判断支援とSaMD連携を見据え、診療前後の医療データフローを一気通貫で最適化。"
  }
];
