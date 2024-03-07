import Image from "next/image";

function Music() {
  return (
    <div className="flex gap-2">
      <Image
        className="rounded-md"
        width={60}
        height={60}
        alt=""
        src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/9/a/1/4/9a14557bd0b957a3863c09f78b038d5d.jpg"
      />
      <div>
        <h6 className="text-sm mb-1 font-medium">Ấm áp</h6>
        <p className="text-xs font-light opacity-60">
          Phạm Nguyên Ngọc, VANH, BMZ
        </p>
        <span className="text-xs font-light opacity-60">Hôm qua</span>
      </div>
    </div>
  );
}

export default Music;
