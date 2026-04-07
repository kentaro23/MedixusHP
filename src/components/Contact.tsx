"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
            Contact
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            お問い合わせ
          </h2>
          <p className="text-muted text-lg">
            導入のご相談、パートナーシップ、採用に関するお問い合わせなど、
            <br className="hidden sm:block" />
            お気軽にご連絡ください。
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl border border-border p-8 lg:p-10 shadow-sm">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* Name row */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  姓
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="大原"
                  className="w-full h-12 px-4 rounded-lg border border-border bg-white text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  名
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="太郎"
                  className="w-full h-12 px-4 rounded-lg border border-border bg-white text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-2"
              >
                メールアドレス
              </label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="w-full h-12 px-4 rounded-lg border border-border bg-white text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
            </div>

            {/* Company */}
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-foreground mb-2"
              >
                ご所属（任意）
              </label>
              <input
                id="company"
                type="text"
                placeholder="株式会社〇〇"
                className="w-full h-12 px-4 rounded-lg border border-border bg-white text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
            </div>

            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-foreground mb-2"
              >
                お問い合わせ種別
              </label>
              <select
                id="category"
                className="w-full h-12 px-4 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                defaultValue=""
              >
                <option value="" disabled>
                  選択してください
                </option>
                <option>サービス導入のご相談</option>
                <option>パートナーシップ</option>
                <option>採用について</option>
                <option>メディア・取材</option>
                <option>その他</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-2"
              >
                メッセージ
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="お問い合わせ内容をご記入ください"
                className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full h-12 text-base font-medium text-white bg-gradient-to-r from-primary to-primary-dark rounded-lg hover:opacity-90 transition-opacity"
            >
              送信する
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
