import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BellRing,
  BrainCircuit,
  Building2,
  FlaskConical,
  Phone,
  ShieldCheck,
  Stethoscope,
  UserRound
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Technology", href: "technology" },
  { label: "Solution", href: "solution" },
  { label: "Pipeline", href: "pipeline" },
  { label: "Team", href: "team" },
  { label: "News", href: "news" },
  { label: "Contact", href: "contact" }
];

export type ProblemCard = {
  value: number;
  decimals?: number;
  suffix: string;
  label: string;
  description: string;
};

export const problemCards: ProblemCard[] = [
  {
    value: 120,
    suffix: "万人",
    label: "心不全患者数（2030年推計）",
    description:
      "高齢化により心不全パンデミックが迫る。再入院率26%、医療費は年間1兆円規模に。"
  },
  {
    value: 73,
    suffix: "%",
    label: "高齢者のアプリ非利用率",
    description:
      "ヘルスケアアプリは若年層向け。最も医療を必要とする高齢者にはテクノロジーが届いていない。"
  },
  {
    value: 4.7,
    decimals: 1,
    suffix: "日",
    label: "心不全増悪の予兆平均検知可能期間",
    description:
      "声帯の浮腫みや微細な呼吸変化には、入院の数日前から兆候が現れる。しかし、現状では見逃されている。"
  }
];

export type StepItem = {
  title: string;
  description: string;
  visual: string;
  icon: LucideIcon;
};

export const stepItems: StepItem[] = [
  {
    title: "電話に出る",
    icon: Phone,
    description:
      "毎日決まった時間に、Medixusから自動電話（IVR）がかかります。患者さんは電話に出て、30秒〜1分、いくつかの質問に声で答えるだけ。スマホ操作・アプリダウンロードは一切不要。",
    visual: "固定電話/スマホに着信が来ているイラスト"
  },
  {
    title: "AIが\"声\"を解析する",
    icon: BrainCircuit,
    description:
      "独自のVoice Biomarkerエンジンが、声帯の浮腫み・呼吸パターン・発話リズムをリアルタイムで解析。日々の微細な変化をミリ秒単位でトラッキングします。",
    visual: "音声波形 → AI処理のフロー図"
  },
  {
    title: "危険を\"未然に\"防ぐ",
    icon: ShieldCheck,
    description:
      "遺伝子リスクスコア（PRS）と日々の声紋データを掛け合わせた独自のリスクモデルが、心不全増悪の兆候を最大数日前に検知。医療機関へ即時アラートを送信し、予防的介入を可能にします。",
    visual: "リスクグラフ + アラート通知"
  }
];

export type TechBadge = {
  label: string;
  icon: LucideIcon;
};

export const techBadges: TechBadge[] = [
  { label: "北里大学医学部 共同研究", icon: Stethoscope },
  { label: "ゼロデータリテンション・アーキテクチャ", icon: ShieldCheck },
  { label: "倫理委員会（IRB）承認スキーム", icon: FlaskConical },
  { label: "個人情報・医療データ完全分離（仮名化処理）", icon: Building2 }
];

export type ComparisonItem = {
  label: string;
  medixus: string;
  awave: string;
  legacy: string;
};

export const comparisonItems: ComparisonItem[] = [
  {
    label: "デバイス",
    medixus: "不要（電話のみ）",
    awave: "専用ハードウェア",
    legacy: "ウェアラブル必須"
  },
  {
    label: "アプリ",
    medixus: "不要",
    awave: "専用アプリ必要",
    legacy: "専用アプリ必要"
  },
  {
    label: "高齢者適応",
    medixus: "◎ 電話に出るだけ",
    awave: "△ IT リテラシー必要",
    legacy: "△ IT リテラシー必要"
  },
  {
    label: "遺伝子データ統合",
    medixus: "◎",
    awave: "✕",
    legacy: "✕"
  },
  {
    label: "スケーラビリティ",
    medixus: "◎ 限界費用≒0",
    awave: "△ ハード製造コスト",
    legacy: "△"
  },
  {
    label: "データ取得基盤",
    medixus: "北里大学IRB",
    awave: "阪大",
    legacy: "なし"
  }
];

export type PipelinePhase = {
  phase: string;
  period: string;
  status: string;
  disease: string;
  marker: string;
  tam: string;
};

export const pipelinePhases: PipelinePhase[] = [
  {
    phase: "Phase 1",
    period: "現在",
    status: "開発中",
    disease: "慢性心不全（増悪兆候検知）",
    marker: "Voice Biomarker（声帯浮腫み）",
    tam: "TAM: 3,200億円"
  },
  {
    phase: "Phase 2",
    period: "2027〜",
    status: "計画中",
    disease: "COPD・呼吸器疾患",
    marker: "呼吸音パターン解析",
    tam: "TAM: 2,800億円"
  },
  {
    phase: "Phase 3",
    period: "2028〜",
    status: "構想段階",
    disease: "うつ病・精神疾患 / パーキンソン病",
    marker: "発話リズム・プロソディ解析",
    tam: "TAM: 4,500億円"
  },
  {
    phase: "Phase 4",
    period: "2029〜",
    status: "ビジョン",
    disease: "アルゴリズムライセンス（Intel Inside戦略）",
    marker: "スマートリング・ジュエリーブランドへのAIエンジン提供",
    tam: "TAM: グローバル未病市場 15兆円"
  }
];

export type BusinessLayer = {
  title: string;
  customer: string;
  detail: string;
  feature: string;
  icon: LucideIcon;
};

export const businessLayers: BusinessLayer[] = [
  {
    title: "Layer 1: 医療機関向けSaaS",
    customer: "顧客: 病院・クリニック・健保組合",
    detail:
      "遠隔モニタリング + Voice Biomarker解析プラットフォームを月額課金で提供。",
    feature: "まずは遺伝子データなしで導入可能。低い導入障壁。",
    icon: Building2
  },
  {
    title: "Layer 2: 治験リクルート基盤",
    customer: "顧客: 製薬会社・CRO",
    detail:
      "蓄積されたリアルワールドデータと患者コホートを活用し、製薬会社の治験患者リクルートを効率化。",
    feature:
      "データ販売ではなく共同開発・マッチング。個人情報保護法に完全準拠。",
    icon: UserRound
  },
  {
    title: "Layer 3: アルゴリズム共同開発",
    customer: "顧客: 製薬会社・医療機器メーカー",
    detail: "製薬会社・医療機器メーカーとの共同研究によるライセンス収入。",
    feature: "大学発の知財を活用したB2Bモデル。",
    icon: FlaskConical
  },
  {
    title: "Layer 4: アルゴリズムライセンス（Intel Inside）",
    customer: "顧客: スマートリング企業・ジュエリーブランド・家電メーカー",
    detail:
      "あらゆるウェアラブル・スマートデバイスの裏側にMedixusのAIエンジンを搭載し、ライセンスフィー収入を得る。",
    feature: "自社ハードは作らず、B2Cの裏側を支配するプラットフォーム戦略。",
    icon: BrainCircuit
  }
];

export type TeamMember = {
  role: string;
  name: string;
  affiliation: string;
  strength: string;
};

export const teamMembers: TeamMember[] = [
  {
    role: "CEO",
    name: "大原 健太郎",
    affiliation: "北里大学 医学部（分子遺伝学研究室 / 藤岡教授陣営）",
    strength:
      "医学知識×事業開発。大学の研究ネットワークを活用したデータエコシステム構築のキーパーソン。"
  },
  {
    role: "CTO",
    name: "候補者（東京大学出身）",
    affiliation: "専門: セキュリティ・アーキテクチャ設計",
    strength:
      "ゼロデータリテンション設計、HIPAA/個人情報保護法準拠のシステム設計に精通。"
  }
];

export type Advisor = {
  name: string;
  expertise: string;
};

export const advisors: Advisor[] = [
  {
    name: "藤岡教授（北里大学）",
    expertise: "分子遺伝学・ゲノム解析"
  },
  {
    name: "医療ビジネス投資家",
    expertise: "事業戦略・VC連携"
  }
];

export type NewsItem = {
  date: string;
  title: string;
};

export const newsItems: NewsItem[] = [
  { date: "2026.04", title: "Medixus Inc. を設立しました" },
  { date: "2026.04", title: "コーポレートサイトを公開しました" },
  { date: "2026.XX", title: "北里大学との共同研究を開始しました（予定）" }
];

export const heroFlowItems = [
  {
    icon: Phone,
    title: "毎日1分",
    text: "患者は電話に出るだけ"
  },
  {
    icon: Activity,
    title: "AIが声帯を解析",
    text: "呼吸・発話リズムを抽出"
  },
  {
    icon: BellRing,
    title: "数日前にアラート",
    text: "医療機関へ即時通知"
  }
];
