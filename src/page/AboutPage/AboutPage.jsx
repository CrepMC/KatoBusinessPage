import './AboutPage.css';
import { useEffect } from 'react';
import AboutCard from '../../components/AboutCard/AboutCard';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutData = [
    {
      reverse: true,
      imageUrl: 'https://placehold.co/300x300?text=Về+KATO',
      altText: 'Lịch sử hình thành KATO',
      title: 'Về KATO',
      subtitle:
        'Hành trình tạo nên những sản phẩm mang đậm dấu ấn thời gian và phong cách.',
    },
    {
      imageUrl: 'https://placehold.co/300x300?text=Lịch+sử+hình+thành',
      altText: 'Lịch sử hình thành KATO',
      title: 'Lịch sử hình thành',
      text: 'KATO được thành lập từ niềm đam mê với vẻ đẹp cổ điển và sự bền bỉ của những món đồ thủ công. Chúng tôi bắt đầu từ một xưởng nhỏ, với mong muốn tái hiện lại những giá trị thời trang đích thực...',
      linkTo: '/about/story',
      linkText: 'Xem thêm...',
    },
    {
      reverse: true,
      imageUrl: 'https://placehold.co/300x300?text=Sứ+mệnh+&+Tầm+nhìn',
      altText: 'Sứ mệnh của KATO',
      title: 'Sứ mệnh & Tầm nhìn',
      text: 'Sứ mệnh của KATO là mang đến những sản phẩm không chỉ đẹp về hình thức mà còn bền vững với thời gian, trở thành người bạn đồng hành đáng tin cậy trong hành trình khẳng định phong cách của mỗi khách hàng.',
      linkTo: '/about/mission',
      linkText: 'Xem thêm...',
    },
    {
      imageUrl: 'https://placehold.co/300x300?text=Giá+trị+cốt+lõi',
      altText: 'Giá trị cốt lõi của KATO',
      title: 'Giá trị cốt lõi',
      text: 'Chất lượng, Bền vững, và Sáng tạo là ba trụ cột cốt lõi định hình nên mọi hoạt động của KATO. Chúng tôi cam kết mang đến những sản phẩm vượt trội, thân thiện với môi trường và luôn đổi mới.',
      linkTo: '/about/values',
      linkText: 'Khám phá giá trị...',
    },
    {
      reverse: true,
      imageUrl: 'https://placehold.co/300x300?text=Quy+trình+sản+xuất',
      altText: 'Quy trình sản xuất tại KATO',
      title: 'Quy trình sản xuất',
      text: 'Từ việc lựa chọn nguyên liệu thô cao cấp đến những đường khâu tỉ mỉ của người thợ thủ công, mỗi sản phẩm KATO đều trải qua một quy trình kiểm soát chất lượng nghiêm ngặt để đảm bảo sự hoàn hảo.',
      linkTo: '/about/process',
      linkText: 'Xem quy trình...',
    },
  ];

  return (
    <div className='about-page-container'>
      <main className='about-content'>
        {aboutData.map((card, index) => (
          <AboutCard key={index} {...card} />
        ))}
      </main>
    </div>
  );
};

export default AboutPage;
