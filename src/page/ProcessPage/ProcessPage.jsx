import { useEffect } from 'react';
import './ProcessPage.css';

const ProcessPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      step: 1,
      title: 'Tuyển chọn nguyên liệu',
      description:
        'Hành trình của một sản phẩm KATO bắt đầu từ việc lựa chọn những nguyên liệu thô tốt nhất. Da thật được nhập khẩu, vải linen và cotton được dệt thủ công, tất cả đều phải qua một quy trình kiểm định nghiêm ngặt.',
      icon: 'fa-solid fa-seedling',
    },
    {
      step: 2,
      title: 'Thiết kế & Tạo mẫu',
      description:
        'Đội ngũ thiết kế của chúng tôi phác thảo những ý tưởng, kết hợp giữa nét đẹp cổ điển và xu hướng hiện đại. Các mẫu rập được tạo ra và thử nghiệm nhiều lần để đảm bảo sự vừa vặn và thoải mái tối đa.',
      icon: 'fa-solid fa-compass-drafting',
    },
    {
      step: 3,
      title: 'Chế tác thủ công',
      description:
        'Đây là linh hồn của sản phẩm KATO. Những người thợ thủ công lành nghề với đôi tay khéo léo và kinh nghiệm lâu năm sẽ cắt, may và hoàn thiện sản phẩm một cách tỉ mỉ. Từng đường kim mũi chỉ đều chứa đựng sự tận tâm.',
      icon: 'fa-solid fa-person-digging',
    },
    {
      step: 4,
      title: 'Kiểm tra chất lượng (KCS)',
      description:
        'Mỗi sản phẩm trước khi đến tay bạn đều phải trải qua một quy trình kiểm soát chất lượng nghiêm ngặt. Chúng tôi kiểm tra từ độ bền của chất liệu, sự chắc chắn của đường may cho đến form dáng cuối cùng.',
      icon: 'fa-solid fa-clipboard-check',
    },
    {
      step: 5,
      title: 'Hoàn thiện & Đóng gói',
      description:
        'Sản phẩm được làm sạch, là hơi và gắn mác trước khi được đóng gói cẩn thận trong bao bì thân thiện với môi trường. Chúng tôi muốn trải nghiệm mở hộp cũng đặc biệt như chính sản phẩm bên trong.',
      icon: 'fa-solid fa-box-archive',
    },
  ];

  return (
    <div className='process-page-container vintage-card'>
      <div className='process-content'>
        <h1 className='page-title'>Quy Trình Sản Xuất Tại KATO</h1>
        <p className='process-intro'>
          Để tạo ra những sản phẩm chất lượng và bền vững, KATO tuân thủ một
          quy trình sản xuất nghiêm ngặt, kết hợp giữa công nghệ hiện đại và sự
          khéo léo của đôi tay người thợ thủ công.
        </p>
        <div className='process-steps'>
          {steps.map((step) => (
            <div className='step-card' key={step.step}>
              <div className='step-icon-container'>
                <div className='step-number'>{step.step}</div>
                <i className={step.icon}></i>
              </div>
              <div className='step-text'>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessPage;