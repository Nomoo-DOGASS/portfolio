import Image from "next/image";
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f7f8] flex flex-col items-center py-16 px-4 font-sans text-[#222]">
      {/* プロフィール */}
      <section className="w-full max-w-xl bg-white rounded-2xl shadow p-10 mb-12 flex flex-col items-center border border-[#e5e7eb]">
        <Image
          src="/icon.png"
          alt="プロフィール画像"
          width={96}
          height={96}
          className="rounded-full mb-4 border-2 border-[#e5e7eb] object-cover"
        />
        <h1 className="text-3xl font-bold mb-1 tracking-tight">山田 太郎 <span className="text-base text-[#888] font-normal align-middle ml-2">大阪大学大学院 M2</span></h1>
      </section>

      {/* 経歴 */}
      <section className="w-full max-w-xl bg-white rounded-2xl shadow p-8 mb-12 border border-[#e5e7eb]">
        <h2 className="text-xl font-semibold mb-4 tracking-tight text-[#222]">経歴</h2>
        <ul className="space-y-2 text-base">
          <li>工学部電子情報工学科</li>
          <li>工学研究科電気電子情報工学専攻</li>
        </ul>
      </section>

      {/* 趣味 */}
      <section className="w-full max-w-xl bg-white rounded-2xl shadow p-8 mb-12 border border-[#e5e7eb]">
        <h2 className="text-xl font-semibold mb-4 tracking-tight text-[#222]">趣味</h2>
        <div className="flex gap-6 justify-center">
          <div className="bg-[#f3f4f6] rounded-xl px-6 py-4 shadow-sm border border-[#e5e7eb] min-w-[120px] flex flex-col items-center">
            <span className="text-lg font-medium mb-1">料理</span>
          </div>
          <div className="bg-[#f3f4f6] rounded-xl px-6 py-4 shadow-sm border border-[#e5e7eb] min-w-[120px] flex flex-col items-center">
            <span className="text-lg font-medium mb-1">読書</span>
          </div>
        </div>
      </section>

      {/* スキル */}
      <section className="w-full max-w-xl bg-white rounded-2xl shadow p-8 mb-12 border border-[#e5e7eb]">
        <h2 className="text-xl font-semibold mb-4 tracking-tight text-[#222]">スキル</h2>
        <ul className="flex flex-wrap gap-3">
          <li className="bg-[#f3f4f6] text-[#222] px-4 py-1 rounded-full text-sm font-medium">Unreal Engine</li>
          <li className="bg-[#f3f4f6] text-[#222] px-4 py-1 rounded-full text-sm font-medium">HTML</li>
          <li className="bg-[#f3f4f6] text-[#222] px-4 py-1 rounded-full text-sm font-medium">CSS</li>
          <li className="bg-[#f3f4f6] text-[#222] px-4 py-1 rounded-full text-sm font-medium">Python</li>
        </ul>
      </section>

      {/* 研究テーマ */}
      <section className="w-full max-w-xl bg-white rounded-2xl shadow p-8 mb-12 border border-[#e5e7eb]">
        <h2 className="text-xl font-semibold mb-4 tracking-tight text-[#222]">研究テーマ</h2>
        <p className="text-[#555] text-base">空白</p>
      </section>

      {/* 実績（ポートフォリオ） */}
      <section className="w-full max-w-xl bg-white rounded-2xl shadow p-8 mb-12 border border-[#e5e7eb]">
        <h2 className="text-xl font-semibold mb-4 tracking-tight text-[#222]">ポートフォリオ</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-[#222] pl-4">
            <h3 className="font-bold text-lg mb-1">Todoアプリ</h3>
            <p className="text-[#555] text-sm mb-1">Next.js + TypeScriptで作成したシンプルなTodo管理アプリ。</p>
            <a href="#" className="text-[#222] underline text-sm hover:opacity-70">GitHub</a>
          </div>
          <div className="border-l-4 border-[#222] pl-4">
            <h3 className="font-bold text-lg mb-1">ポートフォリオサイト</h3>
            <p className="text-[#555] text-sm mb-1">自身の経歴やスキルをまとめたWebサイト。</p>
            <a href="#" className="text-[#222] underline text-sm hover:opacity-70">デモを見る</a>
          </div>
        </div>
      </section>

      {/* SNSリンク */}
      <section className="w-full max-w-xl flex justify-center gap-8 mt-2">
        <a href="#" className="text-[#222] hover:text-[#888] transition text-2xl" title="Twitter"><FaTwitter /></a>
        <a href="#" className="text-[#222] hover:text-[#888] transition text-2xl" title="GitHub"><FaGithub /></a>
        <a href="#" className="text-[#222] hover:text-[#888] transition text-2xl" title="Instagram"><FaInstagram /></a>
      </section>
    </div>
  );
}
