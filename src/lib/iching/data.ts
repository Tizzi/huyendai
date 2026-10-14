export type Hexagram = {
  n: number;
  name: string;
  title: string;
  text: string;
};

/** King Wen number by 6-bit line pattern. Bit 0 is the bottom line, 1 = dương. */
export const KING_WEN = [
  2, 24, 7, 19, 15, 36, 46, 11, 16, 51, 40, 54, 62, 55, 32, 34, 8, 3, 29, 60, 39, 63, 48, 5, 45, 17, 47,
  58, 31, 49, 28, 43, 23, 27, 4, 41, 52, 22, 18, 26, 35, 21, 64, 38, 56, 30, 50, 14, 20, 42, 59, 61, 53,
  37, 57, 9, 12, 25, 6, 10, 33, 13, 44, 1,
];

export const HEXAGRAMS: Hexagram[] = [
  { n: 0, name: "", title: "", text: "" },
  { n: 1, name: "Càn", title: "Thuần Càn", text: "Trời liền trời. Giữ việc đã chọn, đừng đổi hướng giữa chừng." },
  { n: 2, name: "Khôn", title: "Thuần Khôn", text: "Đất chịu mở. Hợp nâng đỡ và chờ đúng lúc, không hợp cưỡng." },
  { n: 3, name: "Truân", title: "Thủy Lôi Truân", text: "Việc mới còn rối. Khởi được, nhưng đừng đòi thông ngay." },
  { n: 4, name: "Mông", title: "Sơn Thủy Mông", text: "Còn non. Hỏi người biết, và chịu học từ đầu." },
  { n: 5, name: "Nhu", title: "Thủy Thiên Nhu", text: "Cần chờ. Lực đã có, thời chưa tới." },
  { n: 6, name: "Tụng", title: "Thiên Thủy Tụng", text: "Dễ tranh. Nói rõ phần mình, tránh kéo dài kiện cáo." },
  { n: 7, name: "Sư", title: "Địa Thủy Sư", text: "Việc đông người. Cần kỷ luật và một người cầm đầu." },
  { n: 8, name: "Tỷ", title: "Thủy Địa Tỷ", text: "Hợp lại. Chọn người để đi cùng, đừng đứng một mình lúc này." },
  { n: 9, name: "Tiểu Súc", title: "Phong Thiên Tiểu Súc", text: "Mây mỏng, mưa chưa. Giữ nhỏ, đừng bung lớn." },
  { n: 10, name: "Lý", title: "Thiên Trạch Lý", text: "Đi trên chỗ dễ trượt. Lễ và chừng mực giữ được bước." },
  { n: 11, name: "Thái", title: "Địa Thiên Thái", text: "Trên dưới thông. Hợp mở việc, vẫn nhớ lúc thông không ở mãi." },
  { n: 12, name: "Bĩ", title: "Thiên Địa Bĩ", text: "Trên dưới nghẽn. Thu mình, đừng cố thông bằng sức." },
  { n: 13, name: "Đồng Nhân", title: "Thiên Hỏa Đồng Nhân", text: "Cùng một việc với người khác. Nói mục tiêu cho rõ." },
  { n: 14, name: "Đại Hữu", title: "Hỏa Thiên Đại Hữu", text: "Đang có của. Giữ bằng sự rộng, không bằng ôm khư." },
  { n: 15, name: "Khiêm", title: "Địa Sơn Khiêm", text: "Thấp mà bền. Bớt phô thì việc dễ xong." },
  { n: 16, name: "Dự", title: "Lôi Địa Dự", text: "Khí đã động. Chuẩn bị vui và chuẩn bị cả việc phải làm." },
  { n: 17, name: "Tùy", title: "Trạch Lôi Tùy", text: "Theo cái đúng lúc, không phải theo đám đông." },
  { n: 18, name: "Cổ", title: "Sơn Phong Cổ", text: "Việc cũ đã hỏng. Sửa từ gốc, không sơn lại vỏ." },
  { n: 19, name: "Lâm", title: "Địa Trạch Lâm", text: "Việc đến gần. Trông nom cho kỹ lúc đang thuận." },
  { n: 20, name: "Quan", title: "Phong Địa Quan", text: "Nhìn trước khi làm. Tấm gương của mình cũng đang bị nhìn." },
  { n: 21, name: "Phệ Hạp", title: "Hỏa Lôi Phệ Hạp", text: "Có vật cản trong miệng. Cắn cho đứt, nói cho rõ lỗi." },
  { n: 22, name: "Bí", title: "Sơn Hỏa Bí", text: "Được trang sức. Đẹp giúp việc, không thay việc." },
  { n: 23, name: "Bác", title: "Sơn Địa Bác", text: "Đang bong. Đừng thêm tầng mới lên nền đã mục." },
  { n: 24, name: "Phục", title: "Địa Lôi Phục", text: "Một điểm dương quay lại. Việc nhỏ trở lại, đừng vội lớn." },
  { n: 25, name: "Vô Vọng", title: "Thiên Lôi Vô Vọng", text: "Làm thẳng, không tính mẹo. Mẹo lúc này dễ phản." },
  { n: 26, name: "Đại Súc", title: "Sơn Thiên Đại Súc", text: "Giữ lực lớn. Học và tích, chưa phải lúc xả hết." },
  { n: 27, name: "Di", title: "Sơn Lôi Di", text: "Coi cái mình nuôi: lời ăn tiếng nói, và người mình gần." },
  { n: 28, name: "Đại Quá", title: "Trạch Phong Đại Quá", text: "Đòn nóc quá nặng. Chống tạm được, phải giảm tải." },
  { n: 29, name: "Khảm", title: "Thuần Khảm", text: "Hố chồng hố. Giữ lòng thật, đi từng bước trong chỗ nguy." },
  { n: 30, name: "Ly", title: "Thuần Ly", text: "Sáng bám vào vật. Việc cần người để nương, không tự cháy một mình." },
  { n: 31, name: "Hàm", title: "Trạch Sơn Hàm", text: "Cảm ứng. Việc đến từ chỗ mình thật lòng, không từ ép." },
  { n: 32, name: "Hằng", title: "Lôi Phong Hằng", text: "Giữ lâu. Đổi chi tiết được, đừng đổi trục." },
  { n: 33, name: "Độn", title: "Thiên Sơn Độn", text: "Rút lui có trật tự. Lui không phải thua." },
  { n: 34, name: "Đại Tráng", title: "Lôi Thiên Đại Tráng", text: "Sức đang mạnh. Mạnh mà không lễ thì gãy." },
  { n: 35, name: "Tấn", title: "Hỏa Địa Tấn", text: "Được tiến. Ra ánh sáng, nhận việc rõ ràng." },
  { n: 36, name: "Minh Di", title: "Địa Hỏa Minh Di", text: "Sáng bị che. Giữ lửa nhỏ, đừng phô lúc này." },
  { n: 37, name: "Gia Nhân", title: "Phong Hỏa Gia Nhân", text: "Việc nhà trước việc ngoài. Vai trong nhà cần gọi đúng tên." },
  { n: 38, name: "Khuê", title: "Hỏa Trạch Khuê", text: "Khác ý. Việc nhỏ vẫn làm chung được dù chưa hòa hết." },
  { n: 39, name: "Kiển", title: "Thủy Sơn Kiển", text: "Phía trước vướng. Quay lại hỏi người, đừng húc." },
  { n: 40, name: "Giải", title: "Lôi Thủy Giải", text: "Nút đang mở. Tha thứ phần cần tha, xử phần cần xử." },
  { n: 41, name: "Tổn", title: "Sơn Trạch Tổn", text: "Bớt chỗ thừa để nuôi chỗ thiếu." },
  { n: 42, name: "Ích", title: "Phong Lôi Ích", text: "Được thêm. Dùng phần thêm vào việc có ích, đừng phung." },
  { n: 43, name: "Quải", title: "Trạch Thiên Quải", text: "Phải quyết một việc lệch. Nói công khai, không thì thầm." },
  { n: 44, name: "Cấu", title: "Thiên Phong Cấu", text: "Gặp bất ngờ. Đừng nhận ngay thứ vừa xuất hiện." },
  { n: 45, name: "Tụy", title: "Trạch Địa Tụy", text: "Người tụ lại. Cần một lẽ chung, nếu không tụ thành loạn." },
  { n: 46, name: "Thăng", title: "Địa Phong Thăng", text: "Đi lên từ dưới. Từng bậc, có người kéo." },
  { n: 47, name: "Khốn", title: "Trạch Thủy Khốn", text: "Lời chưa được nghe. Giữ khí, đợi chỗ nói khác." },
  { n: 48, name: "Tỉnh", title: "Thủy Phong Tỉnh", text: "Giếng vẫn đó. Việc hỏng ở gàu, không ở nguồn." },
  { n: 49, name: "Cách", title: "Trạch Hỏa Cách", text: "Đổi da. Đổi khi đã được lòng người, không đổi vì nóng." },
  { n: 50, name: "Đỉnh", title: "Hỏa Phong Đỉnh", text: "Nấu cho chín. Tài cần vị trí đúng mới thành của nuôi người." },
  { n: 51, name: "Chấn", title: "Thuần Chấn", text: "Sấm động. Giật mình rồi sửa, không giật mình rồi chạy." },
  { n: 52, name: "Cấn", title: "Thuần Cấn", text: "Dừng đúng chỗ. Lưng quay việc không thuộc về mình." },
  { n: 53, name: "Tiệm", title: "Phong Sơn Tiệm", text: "Tiến chậm như chim đậu cành. Vội là mất cành." },
  { n: 54, name: "Quy Muội", title: "Lôi Trạch Quy Muội", text: "Vị thế chưa chính. Đừng đòi danh phận khi lễ chưa xong." },
  { n: 55, name: "Phong", title: "Lôi Hỏa Phong", text: "Đang đầy. Đầy thì lo lúc vơi, đừng lo giữ mãi đỉnh." },
  { n: 56, name: "Lữ", title: "Hỏa Sơn Lữ", text: "Đi xa. Giữ nhỏ, giữ lễ, đừng mang cả nhà trên vai." },
  { n: 57, name: "Tốn", title: "Thuần Tốn", text: "Gió lọt. Việc vào bằng mềm và bằng lặp lại." },
  { n: 58, name: "Đoài", title: "Thuần Đoài", text: "Vui thật thì bền. Vui để mua chuộc thì mỏng." },
  { n: 59, name: "Hoán", title: "Phong Thủy Hoán", text: "Tan sự ứ. Chia việc, chia băng, cho khí lưu thông." },
  { n: 60, name: "Tiết", title: "Thủy Trạch Tiết", text: "Đặt chừng. Chừng quá cũng khổ, không chừng thì tan." },
  { n: 61, name: "Trung Phu", title: "Phong Trạch Trung Phu", text: "Lòng tin ở giữa. Nói ít mà thật thì tới được." },
  { n: 62, name: "Tiểu Quá", title: "Lôi Sơn Tiểu Quá", text: "Vượt một chút ở việc nhỏ. Việc lớn đừng vượt." },
  { n: 63, name: "Ký Tế", title: "Thủy Hỏa Ký Tế", text: "Đã qua sông. Giữ cho khỏi lệch, vì xong cũng là lúc dễ lỏng." },
  { n: 64, name: "Vị Tế", title: "Hỏa Thủy Vị Tế", text: "Chưa qua sông. Sắp tới, nhưng chưa được tuyên bố xong." },
];

export function hexagramByLines(lines: number[]): Hexagram {
  let bits = 0;
  lines.forEach((line, i) => {
    const yang = line === 7 || line === 9;
    if (yang) bits += 1 << i;
  });
  const n = KING_WEN[bits] ?? 1;
  return HEXAGRAMS[n] ?? HEXAGRAMS[1];
}

export const YAO_PLACE = [
  "Hào sơ — việc vừa nhú.",
  "Hào hai — việc ở gần, trong nhà.",
  "Hào ba — chỗ chuyển, dễ vấp.",
  "Hào bốn — gần người trên, nói năng giữ chừng.",
  "Hào năm — ngôi quyết định.",
  "Hào thượng — cùng cực, biết dừng.",
];
