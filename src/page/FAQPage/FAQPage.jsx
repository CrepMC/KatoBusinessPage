import React, { useEffect } from 'react';
import './FAQPage.css';

const faqs = [
  {
    question: 'Làm thế nào để đặt hàng?',
    answer:
      'Bạn có thể liên hệ qua fanpage Facebook của KATO để được nhân viên hỗ trợ.',
  },
  {
    question: 'KATO có những hình thức thanh toán nào?',
    answer:
      'Chúng tôi chấp nhận thanh toán khi nhận hàng (COD) và thanh toán qua chuyển khoản ngân hàng. Thông tin chi tiết sẽ được cung cấp khi bạn tiến hành thanh toán.',
  },
  {
    question: 'Chính sách vận chuyển của KATO như thế nào?',
    answer:
      'KATO hỗ trợ giao hàng toàn quốc. Thời gian giao hàng dự kiến từ 2-7 ngày làm việc tùy thuộc vào địa chỉ của bạn. Phí vận chuyển sẽ được tính tự động trong quá trình đặt hàng.',
  },
  {
    question: 'Tôi có thể đổi trả sản phẩm không?',
    answer:
      'Có, chúng tôi có chính sách đổi trả trong vòng 7 ngày đối với các sản phẩm chưa qua sử dụng, còn nguyên tem mác và bị lỗi từ nhà sản xuất. Vui lòng tham khảo trang "Chính sách Vận chuyển & Đổi trả" để biết thêm chi tiết.',
  },
  {
    question: 'Làm thế nào để bảo quản sản phẩm da thật?',
    answer:
      'Để sản phẩm da luôn bền đẹp, bạn nên tránh để sản phẩm tiếp xúc với nước và nhiệt độ cao. Sử dụng các sản phẩm dưỡng da chuyên dụng định kỳ và lau sạch bằng vải mềm sau khi sử dụng.',
  },
];

const FAQPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='faq-page'>
      <div className='faq-container'>
        <h1 className='faq-title'>Các câu hỏi thường gặp</h1>
        <div className='faq-list'>
          {faqs.map((faq, index) => (
            <details key={index} className='faq-item'>
              <summary className='faq-question'>{faq.question}</summary>
              <p className='faq-answer'>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
