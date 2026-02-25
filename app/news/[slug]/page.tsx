import { CollectorBeacon } from "../../components/collector-beacon";

export default function NewsPage() {
  return (
    <>
      <header style={{ background: "#ffffff", borderBottom: "1px solid #e5e7eb" }}>
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            padding: "12px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <strong style={{ fontSize: "22px", letterSpacing: ".5px" }}>Global News Wire</strong>
          <span style={{ color: "#6b7280", fontSize: "14px" }}>国际 | 社会 | 金融安全</span>
        </div>
      </header>

      <nav style={{ background: "#0f172a", color: "#f8fafc" }}>
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            padding: "10px 20px",
            fontSize: "14px"
          }}
        >
          首页 / 国际新闻 / 跨境执法 / 反洗钱
        </div>
      </nav>

      <main style={{ maxWidth: "1120px", margin: "28px auto", padding: "0 20px" }}>
        <article
          style={{
            background: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
            overflow: "hidden"
          }}
        >
          <div style={{ padding: "28px 28px 20px 28px" }}>
            <p style={{ margin: 0, color: "#b91c1c", fontWeight: 700, fontSize: "13px" }}>
              BREAKING NEWS
            </p>
            <h1 style={{ margin: "10px 0 12px 0", fontSize: "34px", lineHeight: 1.25 }}>
              多国联合行动破获境外洗钱团伙，数十名嫌疑人被抓获
            </h1>
            <p style={{ margin: 0, color: "#6b7280", fontSize: "14px" }}>2026年2月25日 14:30 | 国际要闻</p>
          </div>

          <img
            src="https://pic3.zhimg.com/v2-d855a8e6c8774743e256484b21477750_r.jpg"
            alt="境外洗钱案件相关新闻配图"
            style={{ width: "100%", display: "block", maxHeight: "480px", objectFit: "cover" }}
          />

          <div style={{ padding: "0 28px 30px 28px", lineHeight: 1.9, fontSize: "18px" }}>
            <p>
              据多地执法机构联合通报，近期在跨境协作框架下，警方对一个长期从事资金转移与地下结算的境外洗钱团伙开展集中收网行动，成功抓获多名核心成员，并同步查封一批涉案账户与资金通道。
            </p>
            <p>
              通报显示，该团伙通过空壳公司、虚假贸易合同和多层级账户拆分，试图掩盖非法资金来源，并借助即时通讯工具组织境内外“跑分”网络，实现高频小额转移后再集中清算。办案人员表示，该链条涉及多个国家和地区，具有隐蔽性强、资金流转快、取证难度高等特点。
            </p>
            <p>
              在本次行动中，联合专案组对关键数据进行溯源比对，锁定多条高风险资金路径，并根据司法协作机制实施同步执法。初步统计，已冻结、扣押涉案资金及资产合计数额巨大，案件仍在进一步深挖中。
            </p>
            <p>
              执法部门提醒，公众应警惕“高佣金代收代付”“短期兼职刷流水”等违法邀约，避免出租、出借银行卡和支付账户。一旦发现可疑交易或诈骗线索，应及时向当地公安机关报案。
            </p>
          </div>
        </article>
      </main>

      <footer style={{ background: "#111827", color: "#e5e7eb", marginTop: "24px" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "22px 20px" }}>
          <div style={{ fontWeight: 700, marginBottom: "8px" }}>Global News Wire</div>
        </div>
      </footer>

      <CollectorBeacon />
    </>
  );
}
