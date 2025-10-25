import { useEffect } from 'react';
import './ValuesPage.css';

const ValuesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: 'fa-solid fa-gem',
      title: 'Chất Lượng',
      description:
        'Chúng tôi không bao giờ thỏa hiệp với chất lượng. Từ việc lựa chọn nguyên liệu tốt nhất đến sự tỉ mỉ trong từng đường kim mũi chỉ, mỗi sản phẩm KATO đều là một tác phẩm nghệ thuật.',
    },
    {
      icon: 'fa-solid fa-leaf',
      title: 'Bền Vững',
      description:
        'KATO tin vào thời trang bền vững. Chúng tôi ưu tiên các vật liệu tự nhiên, thân thiện với môi trường và một quy trình sản xuất có trách nhiệm để tạo ra những sản phẩm có giá trị lâu dài.',
    },
    {
      icon: 'fa-solid fa-lightbulb',
      title: 'Sáng Tạo',
      description:
        'Tôn vinh vẻ đẹp cổ điển không có nghĩa là chúng tôi ngừng sáng tạo. KATO luôn tìm tòi, làm mới các thiết kế để mang đến cho bạn những sản phẩm độc đáo, hợp thời và đậm chất riêng.',
    },
  ];

  return (
    <div className='values-page-container'>
      <div className='values-content'>
        <h1 className='page-title'>Giá Trị Cốt Lõi</h1>
        <p className='values-intro'>
          Chất lượng, Bền vững, và Sáng tạo là ba trụ cột định hình nên mọi
          hoạt động của KATO. Đây là những giá trị kim chỉ nam cho mọi quyết
          định và sản phẩm của chúng tôi.
        </p>
        <div className='values-grid'>
          {values.map((value, index) => (
            <div className='value-card' key={index}>
              <div className='value-icon'>
                <i className={value.icon}></i>
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValuesPage;