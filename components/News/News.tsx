function News() {
  return (
    <div>
      <h3 className="font-semibold">Mới Phát Hành</h3>
      <div className="flex gap-5 mt-5">
        <button className="bg-purple-700 text-xs border py-0.5 px-7 rounded-full border-white border-opacity-10 hover:opacity-80">
          TẤT CẢ
        </button>
        <button className="text-xs border py-0.5 px-7 rounded-full border-white border-opacity-10 hover:opacity-80">
          VIỆT NAM
        </button>
        <button className="text-xs border py-0.5 px-7 rounded-full border-white border-opacity-10 hover:opacity-80">
          QUỐC TẾ
        </button>
      </div>
    </div>
  );
}

export default News;
