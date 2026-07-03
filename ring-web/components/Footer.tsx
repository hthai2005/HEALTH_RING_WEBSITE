const columns = [
  { title: "Sản phẩm", links: ["Tính năng", "Thông số", "Màu sắc", "So sánh"] },
  { title: "Hỗ trợ", links: ["Hướng dẫn", "Bảo hành", "Liên hệ", "FAQ"] },
  { title: "Công ty", links: ["Về chúng tôi", "Tin tức", "Tuyển dụng", "Chính sách"] },
];

export default function Footer() {
  return (
    <footer className="px-5 pt-20 pb-8 sm:px-8">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 border-t border-border pt-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="display flex items-center gap-2 text-base">
              <span className="grid h-6 w-6 place-items-center rounded-full border border-current">
                <span className="h-2.5 w-2.5 rounded-full border border-current" />
              </span>
              Galaxy Ring
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted">
              Sức khoẻ thông minh trên từng ngón tay. Theo dõi 24/7 với Galaxy AI.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="eyebrow">{col.title}</h4>
              <ul className="mt-5 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-muted transition-colors hover:text-fg"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="display mt-16 text-[16vw] leading-[0.8] text-fg select-none">
          Galaxy Ring
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Galaxy Ring. Landing page demo.</p>
          <p>Hình ảnh &amp; video © Samsung Electronics — mục đích học tập.</p>
        </div>
      </div>
    </footer>
  );
}
