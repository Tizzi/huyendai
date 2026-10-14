export type Arcana = {
  n: number;
  name: string;
  keyword: string;
  up: string;
  down: string;
};

export const ARCANA: Arcana[] = [
  {
    n: 0,
    name: "Kẻ Khờ",
    keyword: "Bước ra",
    up: "Một khởi đầu chưa có bản đồ. Đi nếu bạn chịu học trên đường.",
    down: "Thiếu chuẩn bị. Đừng nhảy chỉ vì chán chỗ đang đứng.",
  },
  {
    n: 1,
    name: "Pháp Sư",
    keyword: "Công cụ",
    up: "Đủ thứ trong tay. Việc thiếu là bắt đầu, không phải thêm đồ.",
    down: "Tài bị phân tán, hoặc đang dùng để trình diễn.",
  },
  {
    n: 2,
    name: "Nữ Tư Tế",
    keyword: "Im lặng",
    up: "Chưa đủ thông tin. Nghe tiếp, đừng chốt.",
    down: "Giữ bí mật quá lâu thành né sự thật.",
  },
  {
    n: 3,
    name: "Nữ Hoàng",
    keyword: "Nuôi dưỡng",
    up: "Việc cần thời gian và sự chăm, không cần thúc.",
    down: "Chăm quá thành ôm, hoặc bỏ bê thứ đang lớn.",
  },
  {
    n: 4,
    name: "Hoàng Đế",
    keyword: "Khung",
    up: "Đặt quy tắc, ranh giới, và người chịu trách nhiệm.",
    down: "Cứng nhắc, hoặc trốn việc phải đứng ra quyết.",
  },
  {
    n: 5,
    name: "Giáo Hoàng",
    keyword: "Truyền thừa",
    up: "Học người đi trước, một nghi thức, một cộng đồng.",
    down: "Lệ cũ không còn vừa. Được phép hỏi lại.",
  },
  {
    n: 6,
    name: "Đôi Lứa",
    keyword: "Chọn",
    up: "Một lựa chọn bằng giá trị, không chỉ bằng cảm xúc.",
    down: "Lệch nhịp. Chưa nói thật điều mình cần.",
  },
  {
    n: 7,
    name: "Cỗ Xe",
    keyword: "Kéo đi",
    up: "Hai lực ngược nhau vẫn đi được nếu bạn cầm cương.",
    down: "Gắng quá, hoặc mất phương đang định theo.",
  },
  {
    n: 8,
    name: "Sức Mạnh",
    keyword: "Mềm",
    up: "Ghìm cái nóng bằng kiên nhẫn, không bằng đè.",
    down: "Tự nghiêng. Hoặc nuốt cảm xúc đến lúc trào.",
  },
  {
    n: 9,
    name: "Ẩn Sĩ",
    keyword: "Rút vào",
    up: "Một khoảng lùi có ích. Câu trả lời ở trong, không ở đám đông.",
    down: "Cô lập thành trốn. Đến lúc mở cửa một chút.",
  },
  {
    n: 10,
    name: "Bánh Xe",
    keyword: "Xoay",
    up: "Việc đang đổi pha. Giữ việc của mình, đừng níu pha cũ.",
    down: "Kháng một chu kỳ đã hết, hoặc chờ may mà không nhúc.",
  },
  {
    n: 11,
    name: "Công Lý",
    keyword: "Cân",
    up: "Nhìn hệ quả thật, rồi quyết cho đều.",
    down: "Thiên vị, hoặc trốn một sự thật đã rõ.",
  },
  {
    n: 12,
    name: "Người Treo",
    keyword: "Treo",
    up: "Tạm dừng để thấy góc khác. Chưa phải lúc vùng.",
    down: "Đứng yên quá lâu. Hy sinh không còn ích.",
  },
  {
    n: 13,
    name: "Chuyển hóa",
    keyword: "Bỏ vỏ",
    up: "Một việc phải kết thúc thì việc sau mới có chỗ.",
    down: "Níu cái đã hết, hoặc sợ đổi đến mức đứng hình.",
  },
  {
    n: 14,
    name: "Tiết độ",
    keyword: "Pha",
    up: "Trộn vừa. Việc này cần liều lượng, không cần cực đoan.",
    down: "Lệch một phía. Bớt hoặc thêm một chút là đủ.",
  },
  {
    n: 15,
    name: "Ràng buộc",
    keyword: "Dây",
    up: "Một thói, một quan hệ, một nỗi sợ đang cầm trịch.",
    down: "Nhìn ra sợi dây. Gỡ được từng nút, không cần đứt hết.",
  },
  {
    n: 16,
    name: "Ngọn Tháp",
    keyword: "Đổ",
    up: "Cấu trúc không thật bị lộ. Đau, nhưng sạch.",
    down: "Trì hoãn một sự đổ đã báo trước, hoặc sợ quá mức.",
  },
  {
    n: 17,
    name: "Ngôi Sao",
    keyword: "Vẳng",
    up: "Sau biến cố còn một hướng. Giữ hy vọng có việc làm kèm.",
    down: "Hy vọng mỏng, hoặc mất niềm tin vào việc đang chữa.",
  },
  {
    n: 18,
    name: "Mặt Trăng",
    keyword: "Mờ",
    up: "Chưa thấy rõ. Đi chậm, đừng tin ngay hình trong sương.",
    down: "Sương đang tan. Gọi tên nỗi sợ cho nó nhỏ lại.",
  },
  {
    n: 19,
    name: "Mặt Trời",
    keyword: "Rõ",
    up: "Việc sáng ra. Được vui, được nói thẳng.",
    down: "Vui chưa trọn, hoặc nắng quá thành khoe.",
  },
  {
    n: 20,
    name: "Phán xét",
    keyword: "Gọi",
    up: "Một tiếng gọi để làm lại cho đúng, không phải để tự kết án.",
    down: "Tự trách quá nặng, hoặc giả vờ không nghe.",
  },
  {
    n: 21,
    name: "Thế giới",
    keyword: "Tròn",
    up: "Một vòng đã khép. Nghỉ một nhịp trước vòng mới.",
    down: "Còn một đoạn dở. Đừng tuyên bố xong khi chưa xong.",
  },
];

export type DrawnCard = Arcana & { reversed: boolean; position: string };

function shuffle<T>(list: T[]): T[] {
  const next = list.slice();
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const a = next[i];
    const b = next[j];
    if (a && b) {
      next[i] = b;
      next[j] = a;
    }
  }
  return next;
}

export function drawSpread(count: 1 | 3): DrawnCard[] {
  const positions = count === 1 ? ["Lá bài"] : ["Chuyện cũ", "Hiện tại", "Hướng tới"];
  return shuffle(ARCANA)
    .slice(0, count)
    .map((card, i) => ({
      ...card,
      reversed: Math.random() < 0.5,
      position: positions[i] ?? "Lá bài",
    }));
}
