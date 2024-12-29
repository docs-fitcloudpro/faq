window.i18nData = window.i18nData || {};
window.i18nData.vi = {
    searchPlaceholder: "Tìm kiếm câu hỏi thường gặp...",
    pageTitle: "Câu hỏi thường gặp",
    mainTitle: "Câu hỏi thường gặp",
    subtitle: "Hướng dẫn xử lý sự cố và câu hỏi thường gặp khi sử dụng đồng hồ thông minh",
    footer: {
        copyright: "© 2025 Công ty TNHH Dữ liệu lớn thông minh Shenzhen Tuobu",
    },
    categories: {
        all: "Tất cả",
        basic: "Sử dụng cơ bản",
        connection: "Kết nối Bluetooth",
        notification: "Thông báo",
        health: "Theo dõi sức khỏe",
        data: "Đồng bộ dữ liệu",
        watchface: "Cài đặt mặt đồng hồ",
        weather: "Hiển thị thời tiết",
        device: "Quản lý thiết bị", 
        other: "Khác"
    },
    faqData: [
        {
            category: "connection",
            question: "Tại sao tôi không thể tìm thấy đồng hồ của mình?",
            answer: `
            Vui lòng kiểm tra các mục sau:

            1. Kiểm tra xem đồng hồ có đủ pin không, nếu pin yếu, hãy sạc trước.

            2. Giữ đồng hồ và điện thoại trong phạm vi 0.5 mét.

            3. Kiểm tra xem có điện thoại nào khác đã kết nối với đồng hồ này không, nếu có, vui lòng hủy ghép nối đồng hồ trên điện thoại cũ và xóa ghép nối Bluetooth trong cài đặt hệ thống trước khi ghép nối lại.

            4. Trong cài đặt điện thoại, đảm bảo Bluetooth đã được bật, cụ thể là mở [Cài đặt] - [Bluetooth] và kiểm tra xem công tắc Bluetooth đã bật chưa.

            5. Đảm bảo đã cấp quyền Bluetooth cho ứng dụng hiện tại, cụ thể là mở [Cài đặt] - [Ứng dụng] - [{app_name}] và kiểm tra xem đã cấp quyền Bluetooth chưa.

            6. Thử khởi động lại Bluetooth của điện thoại, cụ thể là:
            Cách 1: Mở [Cài đặt] - [Bluetooth], tắt Bluetooth rồi bật lại.
            Cách 2: Vuốt xuống từ đầu màn hình chính để truy cập trung tâm điều khiển, sau đó nhấn vào biểu tượng Bluetooth để tắt và bật lại.

            7. Khôi phục cài đặt gốc đồng hồ, cụ thể là trên đồng hồ mở [Cài đặt] - [Hệ thống] - [Khôi phục cài đặt gốc], sau đó chọn [Xác nhận].

            8. Khởi động lại đồng hồ và điện thoại, sau đó thử kết nối lại.

            {faq_note}Nếu các phương pháp trên không giải quyết được vấn đề, vui lòng chụp ảnh thông tin hệ thống của đồng hồ và chụp màn hình một số thông tin hệ thống của điện thoại, gửi phản hồi cho chúng tôi thông qua chức năng phản hồi trong ứng dụng. Khi liên hệ với chúng tôi, hãy cung cấp càng nhiều thông tin hữu ích càng tốt để chúng tôi có thể giải quyết vấn đề tốt hơn.`
        },
        {
            category: "connection", 
            question: "Làm thế nào để xác nhận đồng hồ đã kết nối thành công với điện thoại?",
            answer: `
            Trong ứng dụng điện thoại, trạng thái thiết bị hiển thị là "Đã kết nối".

            Đồng thời, trong iOS mở [Cài đặt] - [Bluetooth], trong danh sách [Thiết bị của tôi] hiển thị tên Bluetooth của đồng hồ và trạng thái là "Đã kết nối", có dấu chấm than trong vòng tròn màu xanh ở phía sau.

            Nhấn vào dấu chấm than để xem thông tin thiết bị như tên thiết bị và các công tắc như [Chia sẻ thông báo hệ thống] đều đã được bật.`
        },
        {
            category: "connection",
            question: "Kết nối Bluetooth thường xuyên bị ngắt, làm thế nào để cải thiện?",
            answer: `
            Có thể thử các cách sau:

            1. Đảm bảo điện thoại và đồng hồ ở trong môi trường ít nhiễu sóng.

            2. Tránh kết nối đồng hồ với các thiết bị Bluetooth khác cùng lúc.

            3. Cập nhật phiên bản firmware đồng hồ và phiên bản ứng dụng điện thoại.`
        },
        {
            category: "notification",
            question: "Đồng hồ không nhận được thông báo từ điện thoại, phải làm sao?",
            answer: `
            Vui lòng kiểm tra các mục sau:

            1. Đảm bảo đồng hồ và điện thoại đã được kết nối.

            2. Xác nhận bạn đã bật thông báo tin nhắn tương ứng trong ứng dụng điện thoại, cụ thể là mở [{app_name}] - [Thiết bị] - [Thông báo tin nhắn] và kiểm tra xem đã bật thông báo tin nhắn cho ứng dụng tương ứng chưa.

            3. Xác nhận đồng hồ đã được ghép nối Bluetooth với điện thoại và đã bật chia sẻ thông báo hệ thống, cụ thể là trên điện thoại mở [Cài đặt] - [Bluetooth], sau đó nhấn vào dấu chấm than bên cạnh tên Bluetooth của đồng hồ trong danh sách [Thiết bị của tôi] và kiểm tra xem đã bật [Chia sẻ thông báo hệ thống] chưa.

            4. Xác nhận đã bật quyền thông báo trên điện thoại, cụ thể là trên điện thoại mở [Cài đặt] - [Thông báo] và kiểm tra xem các cài đặt có chính xác không.

            5. Điện thoại đã cài đặt ứng dụng tương ứng với đồng hồ và đã bật quyền thông báo, ví dụ với WhatsApp, cụ thể là trên điện thoại mở [Cài đặt] - [Ứng dụng] - [WhatsApp] - [Thông báo], sau đó kiểm tra [Cho phép thông báo] đã được bật và kiểm tra các cài đặt loại thông báo đều chính xác.

            {faq_note}Nếu các phương pháp trên không giải quyết được vấn đề, vui lòng chụp ảnh thông tin hệ thống của đồng hồ và chụp màn hình một số thông tin hệ thống của điện thoại, gửi phản hồi cho chúng tôi thông qua chức năng phản hồi trong ứng dụng. Khi liên hệ với chúng tôi, hãy cung cấp càng nhiều thông tin hữu ích càng tốt để chúng tôi có thể giải quyết vấn đề tốt hơn.`
        },
        {
            category: "notification",
            question: "Đồng hồ chỉ nhận được thông báo từ một số ứng dụng, làm thế nào để khắc phục?",
            answer: `
            Vui lòng đảm bảo đã bật riêng quyền thông báo cho các ứng dụng cần thiết trong phần thông báo tin nhắn của ứng dụng điện thoại và đồng bộ với đồng hồ.

            Cụ thể là mở [{app_name}] - [Thiết bị] - [Thông báo tin nhắn], sau đó bật thông báo tin nhắn cho ứng dụng tương ứng.`
        },
        {
            category: "data",
            question: "Làm thế nào để xem dữ liệu vận động và sức khỏe của tôi trong ứng dụng điện thoại?",
            answer: `
            Khi bạn đo dữ liệu vận động và sức khỏe trên đồng hồ, đồng hồ sẽ tự động ghi lại dữ liệu trong đồng hồ, khi bạn kết nối với ứng dụng điện thoại, dữ liệu sẽ được đồng bộ vào ứng dụng điện thoại.
            
            Nếu chưa đồng bộ, bạn có thể thử kéo xuống trang chủ của ứng dụng để đồng bộ thủ công dữ liệu vận động và sức khỏe.
            
            Sau khi đồng bộ xong, bạn có thể xem dữ liệu nhịp tim, số bước, giấc ngủ, stress, SpO2, nhiệt độ cơ thể, vận động, v.v. trong ứng dụng.`
        },
        {
            category: "health",
            question: "Dữ liệu vận động và sức khỏe của tôi không chính xác, phải làm sao?",
            answer: `
            Vui lòng xác nhận thông tin cá nhân của bạn đã được điền chính xác, cụ thể là một số thuật toán đo lường chức năng của đồng hồ phụ thuộc vào giới tính, chiều cao, cân nặng, tuổi và các thông tin cá nhân khác của bạn, vui lòng đảm bảo tính chính xác của những thông tin này để có được dữ liệu vận động và sức khỏe chính xác hơn.`
        },
        {
            category: "data",
            question: "Dữ liệu trên đồng hồ không khớp với dữ liệu trên ứng dụng, phải làm sao?",
            answer: `
            Vui lòng kiểm tra các mục sau:

            1. Dữ liệu trên đồng hồ đã được đồng bộ vào ứng dụng, nếu chưa, vui lòng kéo xuống trang chủ của ứng dụng để đồng bộ thủ công dữ liệu vận động và sức khỏe, sau đó kiểm tra xem dữ liệu đã khớp chưa.

            2. Kiểm tra xem đồng hồ có kết nối với điện thoại khác không, dữ liệu có bị đồng bộ vào ứng dụng trên điện thoại khác không.

            {faq_note}Thông thường, chúng tôi không khuyến nghị kết nối cùng một đồng hồ với nhiều điện thoại hoặc ứng dụng cùng lúc, vì điều này có thể dẫn đến không đồng bộ dữ liệu, thậm chí mất dữ liệu. Ngoài ra, để đảm bảo không mất dữ liệu, dữ liệu trong ngày trên ứng dụng được cộng dồn, trong khi dữ liệu trên đồng hồ sẽ bị xóa sau khi ghép nối lại, nếu ghép nối lại đồng hồ, có thể dẫn đến dữ liệu trên đồng hồ không khớp với dữ liệu trên ứng dụng. Ví dụ với dữ liệu giấc ngủ, nếu bạn hủy ghép nối đồng hồ ngay sau khi kết nối với ứng dụng điện thoại, dữ liệu trên đồng hồ chưa kịp đồng bộ vào ứng dụng (thường do lượng dữ liệu lớn, đồng bộ dữ liệu cần một khoảng thời gian nhất định), thì dữ liệu trên đồng hồ sẽ bị xóa và ứng dụng sẽ bị mất dữ liệu giấc ngủ. Do đó, chúng tôi khuyến nghị trong trường hợp bạn thực sự cần hủy ghép nối đồng hồ, sau khi kết nối đồng hồ với ứng dụng điện thoại, đừng hủy ghép nối ngay mà hãy đợi dữ liệu trên đồng hồ đồng bộ xong rồi mới hủy ghép nối.`
        },
        {
            category: "weather",
            question: "Đồng hồ không hiển thị thời tiết, làm thế nào để khắc phục?",
            answer: `
            Vui lòng kiểm tra các mục sau:

            1. Xác nhận đồng hồ hiện tại hỗ trợ chức năng thời tiết, nếu đồng hồ không hỗ trợ chức năng thời tiết thì không thể hiển thị thời tiết, cụ thể là kiểm tra xem trong menu của đồng hồ có mục [Thời tiết] không.

            2. Xác nhận [Dịch vụ vị trí] của điện thoại đã được bật, cụ thể là mở [Cài đặt] - [Quyền riêng tư & Bảo mật] - [Dịch vụ vị trí] và kiểm tra xem dịch vụ vị trí đã được bật chưa.

            3. Xác nhận đã cấp quyền sử dụng dịch vụ vị trí cho {app_name}, cụ thể là mở [Cài đặt] - [Ứng dụng] - [{app_name}] - [Vị trí] và kiểm tra xem đã chọn [Luôn luôn] hoặc [Khi sử dụng ứng dụng] chưa.

            4. Xác nhận {app_name} có thể truy cập internet bình thường, cụ thể là mở [{app_name}] - [Thiết bị] - [Cài đặt mặt đồng hồ], kiểm tra xem ứng dụng có thể lấy danh sách mặt đồng hồ đám mây không, tất nhiên bạn cũng có thể xác nhận điều này bằng các cách khác. Nếu không thể truy cập internet bình thường, hãy xóa ứng dụng, khởi động lại điện thoại, cài đặt lại ứng dụng, nhớ cho phép ứng dụng truy cập internet khi mở lần đầu.

            5. Kiểm tra xem đã bật chức năng đẩy thời tiết trong ứng dụng điện thoại chưa, cụ thể là mở [{app_name}] - [Thiết bị] - [Đẩy thời tiết] và kiểm tra xem đã bật chức năng đẩy thời tiết chưa.

            6. Thử tắt công tắc [Đẩy thời tiết], sau đó bật lại, kiểm tra xem có thể hiển thị thời tiết bình thường không.

            {faq_note}Chức năng thời tiết phụ thuộc vào vị trí hiện tại của điện thoại, chủ yếu để lấy thông tin thời tiết tại vị trí của bạn. Ngoài ra, chức năng thời tiết còn phụ thuộc vào truy cập internet, nếu kết nối mạng của điện thoại không ổn định hoặc khả năng truy cập mạng của ứng dụng bị hạn chế, sẽ không thể lấy thông tin thời tiết qua internet.<br/>
            Nếu các phương pháp trên không giải quyết được vấn đề, vui lòng chụp ảnh thông tin hệ thống của đồng hồ và chụp màn hình một số thông tin hệ thống của điện thoại, gửi phản hồi cho chúng tôi thông qua chức năng phản hồi trong ứng dụng. Khi liên hệ với chúng tôi, hãy cung cấp càng nhiều thông tin hữu ích càng tốt để chúng tôi có thể giải quyết vấn đề tốt hơn.`
        },
        {
            category: "weather",
            question: "Dữ liệu thời tiết trên đồng hồ không chính xác, phải làm sao?",
            answer: `
            Kiểm tra các mục sau:

            1. Định vị GPS hiện tại của điện thoại có chính xác không, nếu định vị GPS của điện thoại không chính xác thì dữ liệu thời tiết cũng không thể chính xác, nên ở nơi thoáng đãng, bật GPS điện thoại, sau đó kiểm tra xem có thể lấy thông tin vị trí bình thường không.

            2. Kiểm tra thời gian cập nhật thời tiết trên đồng hồ, xác nhận thông tin thời tiết có hết hạn không, nếu thông tin thời tiết đã hết hạn, vui lòng thử mở ứng dụng điện thoại, vào [Thiết bị] - [Đẩy thời tiết], thử tắt đẩy thời tiết, sau đó bật lại, kiểm tra xem có thể hiển thị thời tiết bình thường không.

            {faq_note}Nếu các phương pháp trên không giải quyết được vấn đề, vui lòng chụp ảnh thông tin hệ thống của đồng hồ và chụp màn hình một số thông tin hệ thống của điện thoại, gửi phản hồi cho chúng tôi thông qua chức năng phản hồi trong ứng dụng. Khi liên hệ với chúng tôi, hãy cung cấp càng nhiều thông tin hữu ích càng tốt để chúng tôi có thể giải quyết vấn đề tốt hơn.`
        },
        {
            category: "watchface",
            question: "Làm thế nào để tải mặt đồng hồ đám mây lên đồng hồ",
            answer: `
            Các bước thực hiện:

            1. Trong {app_name}, mở [Thiết bị] - [Cài đặt mặt đồng hồ], sau đó chọn mặt đồng hồ bạn thích.

            2. Nhấn [Đồng bộ mặt đồng hồ] trong giao diện bật lên.

            3. Đợi bắt đầu tải xuống mặt đồng hồ, sau khi tải xuống xong, sẽ tự động tải mặt đồng hồ lên thiết bị đồng hồ.

            4. Đợi tải lên mặt đồng hồ hoàn tất, đồng hồ sẽ tự động thay đổi mặt đồng hồ.`
        },
        {
            category: "watchface",
            question: "Làm thế nào để tùy chỉnh mặt đồng hồ và tải lên đồng hồ?",
            answer: `
            Các bước thực hiện:

            1. Trong {app_name}, mở [Thiết bị] - [Cài đặt mặt đồng hồ], sau đó nhấn vào [Lối vào tùy chỉnh mặt đồng hồ] (ở góc trái trên cùng đầu tiên, có biểu tượng nút chỉnh sửa ở giữa) để vào trang tùy chỉnh mặt đồng hồ.

            2. Sau đó theo sở thích của bạn, sửa đổi nền mặt đồng hồ, vị trí ngày giờ và kiểu mặt đồng hồ.

            3. Nhấn nút [Đặt làm mặt đồng hồ].

            4. Đợi tạo mặt đồng hồ tùy chỉnh, sau khi tạo xong, sẽ tự động tải mặt đồng hồ lên thiết bị đồng hồ.

            5. Đợi tải lên mặt đồng hồ hoàn tất, đồng hồ sẽ tự động thay đổi mặt đồng hồ.`
        },
        {
            category: "basic",
            question: "Làm thế nào để bật/tắt đồng hồ thông minh?",
            answer: `
            Các bước thực hiện:

            1. Bật đồng hồ: Nhấn giữ nút bên cạnh đồng hồ 3-5 giây, màn hình sáng lên là được. Khi đồng hồ hết pin, sạc khoảng 1 phút đồng hồ sẽ tự động bật và vào trang chủ.

            2. Tắt đồng hồ: Nhấn giữ nút bên cạnh đồng hồ 3-5 giây, trong giao diện bật lên chọn [Tắt nguồn], nhấn [Xác nhận], đồng hồ sẽ hiển thị thông báo "Goodbye", sau đó đồng hồ sẽ tự động tắt.`
        },
        {
            category: "basic",
            question: "Làm thế nào để khôi phục cài đặt gốc cho đồng hồ thông minh?",
            answer: `
            Các bước thực hiện:

            Cách 1: Khôi phục cài đặt gốc trên đồng hồ, cụ thể là trên đồng hồ mở [Cài đặt] - [Hệ thống] - [Khôi phục cài đặt gốc], sau đó chọn [Xác nhận].

            Cách 2: Khôi phục cài đặt gốc trên đồng hồ, cụ thể là nhấn giữ nút bên cạnh đồng hồ 3-5 giây, trong giao diện bật lên chọn [Khôi phục cài đặt gốc], sau đó chọn [Xác nhận].

            Cách 3: Khôi phục cài đặt gốc trong ứng dụng điện thoại, cụ thể là trong ứng dụng điện thoại mở [Thiết bị] - [Khôi phục cài đặt gốc], sau đó chọn [Xác nhận].`
        },
        {
            category: "basic",
            question: "Làm thế nào để hủy ghép nối giữa ứng dụng và đồng hồ thông minh?",
            answer: `
            Các bước thực hiện:

            1. Trong ứng dụng điện thoại, mở trang [Thiết bị], kéo xuống cuối cùng, sau đó chọn [Hủy ghép nối thiết bị], sau đó chọn [Xác nhận].

            2. Hủy ghép nối Bluetooth giữa đồng hồ thông minh và điện thoại, cụ thể là trên điện thoại mở [Cài đặt] - [Bluetooth], sau đó nhấn vào dấu chấm than bên cạnh tên Bluetooth của đồng hồ trong danh sách [Thiết bị của tôi], sau đó chọn [Bỏ qua thiết bị này].

            {faq_note}Sau khi hủy ghép nối thiết bị đồng hồ, nhất định phải thủ công vào cài đặt hệ thống để hủy ghép nối Bluetooth giữa đồng hồ thông minh và điện thoại, nếu không lần sau khi ghép nối có thể sẽ không tìm thấy thiết bị đồng hồ đó, dẫn đến không thể ghép nối.`
        },
        {
            category: "basic",
            question: "Làm thế nào để từ chối cuộc gọi?",
            answer: `
            Khi đồng hồ có thông báo cuộc gọi đến, nhấn giữ nút bên cạnh đồng hồ 3 giây sẽ từ chối cuộc gọi.`
        },
        {
            category: "basic",
            question: "Làm thế nào để sử dụng chụp ảnh lắc?",
            answer: `
            Các bước thực hiện:

            1. Trong ứng dụng điện thoại, mở [Thiết bị] - [Chụp ảnh lắc], nếu hỏi bạn có cho phép "truy cập camera điện thoại" không, vui lòng chọn [Cho phép].

            2. Lắc thiết bị đồng hồ hoặc nhấn vào biểu tượng camera trên đồng hồ để chụp ảnh.`
        },
        {
            category: "basic",
            question: "Làm thế nào để sử dụng chức năng điều khiển nhạc?",
            answer: `
            Khi thiết bị đồng hồ kết nối thành công với điện thoại, mở trình phát nhạc trên điện thoại, phát nhạc trong danh sách tải xuống, trong giao diện nhạc của thiết bị nhấn nút trái phải để chuyển bài, nhấn nút giữa để tạm dừng hoặc phát nhạc.

            {faq_note}Một số trình phát nhạc tích hợp của điện thoại không được hỗ trợ, có thể hỗ trợ trình phát nhạc QQ Music, NetEase Cloud Music, PLAY Music, v.v.`
        },
        {
            category: "device", 
            question: "Nâng cấp phần mềm đồng hồ thất bại, phải làm sao?",
            answer: `
            Khi nâng cấp phần mềm đồng hồ thất bại, vui lòng thử các cách sau:

            1. Đảm bảo pin đồng hồ đầy đủ, pin yếu có thể dẫn đến nâng cấp phần mềm thất bại.

            2. Đảm bảo kết nối giữa đồng hồ và điện thoại ổn định, kết nối không ổn định có thể dẫn đến nâng cấp phần mềm thất bại.

            3. Đảm bảo đồng hồ và điện thoại trong cùng một môi trường mạng, mạng không ổn định có thể dẫn đến nâng cấp phần mềm thất bại.

            4. Trong quá trình nâng cấp phần mềm, vui lòng không ngắt kết nối giữa đồng hồ và điện thoại, nếu không có thể dẫn đến nâng cấp phần mềm thất bại.

            5. Trong quá trình nâng cấp phần mềm, vui lòng không tắt ứng dụng, nếu không có thể dẫn đến nâng cấp phần mềm thất bại.

            6. Trong quá trình nâng cấp phần mềm, vui lòng không thoát khỏi giao diện nâng cấp phần mềm hoặc tắt màn hình, nếu không có thể dẫn đến nâng cấp phần mềm thất bại.

            7. Một số đồng hồ khi nâng cấp thất bại sẽ có thời gian chờ hai phút (trong thời gian này thiết bị không có phản ứng gì) mới kích hoạt lại kết nối, vui lòng kiên nhẫn chờ đợi.

            {faq_note}Nếu các cách trên không giải quyết được vấn đề, vui lòng chụp ảnh thông tin hệ thống của đồng hồ và chụp màn hình một số thông tin hệ thống của điện thoại, gửi phản hồi cho chúng tôi thông qua chức năng phản hồi ý kiến trong ứng dụng. Khi liên hệ với chúng tôi, vui lòng cung cấp càng nhiều thông tin hữu ích càng tốt để chúng tôi có thể giải quyết vấn đề tốt hơn.`
        },
        {
            category: "device",
            question: "Sạc một thời gian rồi nhưng thiết bị vẫn không có phản ứng là do đâu?",
            answer: `
            Khi đồng hồ không được sử dụng trong thời gian dài, nó sẽ vào trạng thái pin yếu, vui lòng sử dụng bộ sạc điện thoại để sạc khoảng nửa giờ để kích hoạt.

            {faq_note}Khi sạc tốt nhất nên sử dụng bộ sạc điện thoại, dòng điện từ máy tính quá nhỏ, khi pin yếu có thể rất khó sạc vào.`
        },
        {
            category: "device",
            question: "Tại sao nâng cổ tay không sáng màn hình?",
            answer: `
            Vui lòng kiểm tra các mục sau:

            1. Vui lòng kiểm tra xem chức năng nâng cổ tay sáng màn hình trong ứng dụng có bị tắt không, cài đặt khoảng thời gian nâng cổ tay có phù hợp với nhu cầu của bạn không. Sau khi kết nối Bluetooth, trong trang [Thiết bị] của {app_name}, bật [Nâng cổ tay sáng màn hình], cài đặt khoảng thời gian phù hợp với nhu cầu của bạn, sau đó có thể nâng cổ tay sáng màn hình trong khoảng thời gian đó.

            2. Vui lòng kiểm tra xem thiết bị có bật chế độ không làm phiền không, khi thiết bị bật chế độ không làm phiền, nâng cổ tay sẽ không sáng màn hình.

            3. Khi cần xem giờ, nâng cổ tay hướng màn hình về phía mình.

            {faq_note}Nếu các cách trên không giải quyết được vấn đề, vui lòng chụp ảnh thông tin hệ thống của đồng hồ và chụp màn hình một số thông tin hệ thống của điện thoại, gửi phản hồi cho chúng tôi thông qua chức năng phản hồi ý kiến trong ứng dụng. Khi liên hệ với chúng tôi, vui lòng cung cấp càng nhiều thông tin hữu ích càng tốt để chúng tôi có thể giải quyết vấn đề tốt hơn.`
        },
        {
            category: "device", 
            question: "Đồng hồ có thể cài đặt tối đa bao nhiêu báo thức?",
            answer: `
            Điều này tùy thuộc vào đồng hồ của bạn, thông thường, đồng hồ có thể cài đặt 5 báo thức.`
        },
        {
            category: "device",
            question: "Làm thế nào để điều chỉnh thời gian trên đồng hồ?",
            answer: `
            Sau khi đồng hồ kết nối với điện thoại sẽ tự động đồng bộ thời gian, không cần điều chỉnh thủ công.`
        },
        {
            category: "device",
            question: "Làm thế nào để cài đặt ngôn ngữ cho đồng hồ?",
            answer: `
            Thông thường, sau khi đồng hồ kết nối với điện thoại sẽ tự động đồng bộ ngôn ngữ, không cần điều chỉnh thủ công.

            {faq_note}Một số đồng hồ hỗ trợ cài đặt ngôn ngữ trực tiếp trên đồng hồ, cụ thể là trên đồng hồ mở [Menu] - [Cài đặt] - [Ngôn ngữ], sau đó chọn ngôn ngữ bạn muốn cài đặt.`
        },
        {
            category: "other",
            question: "Tại sao thời gian sử dụng pin bị rút ngắn?",
            answer: `
            Nếu đồng hồ bật các chức năng như nâng cổ tay sáng màn hình, đo nhịp tim định kỳ sẽ làm tăng mức tiêu thụ pin, giảm thời gian sử dụng pin.`
        },
        {
            category: "other",
            question: "Đồng hồ có chống nước không?",
            answer: `
            Về vấn đề chống nước của thiết bị, vui lòng xem hướng dẫn sử dụng của model thiết bị tương ứng đã mua để xác nhận có hỗ trợ chống nước sinh hoạt hay chống nước khi bơi. Không áp dụng cho lặn, nước biển, nhảy nước, tắm nước nóng, xông hơi, các hoạt động dưới nước hoặc nước sâu khác dưới dòng nước chảy mạnh; dây đeo da, dây đeo kim loại không phù hợp để bơi. Chức năng chống nước không phải là vĩnh viễn, khả năng bảo vệ có thể giảm do mài mòn hàng ngày.`
        }

    ]
}; 