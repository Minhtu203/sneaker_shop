import { useNavigate } from 'react-router-dom';

const CardShoes = (props) => {
  const { shoe, heart = false, heartClick = () => {} } = props;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/shoes/${shoe?._id}`);
  };

  return (
    <div className="flex flex-col gap-2 cursor-pointer " onClick={handleClick}>
      <div className="relative w-90 h-90">
        <img src={shoe?.colors[0].img[0]} alt={shoe?.name} className="w-90 h-90 object-cover rounded-2xl" />
        {heart && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              heartClick();
            }}
            className="w-10 h-10 bg-white cursor-pointer absolute right-6 top-6 flex items-center justify-center rounded-[50%]"
          >
            <i className="pi pi-heart-fill bg-white" />
          </button>
        )}
      </div>
      <div className="flex flex-col gap-0">
        <span className="font-bold text-xl text-[var(--primary-blue)]">{shoe?.name}</span>
        <span className="font-bold text-md text-[var(--primary-blue)]">{shoe?.gender}</span>
        <span className="font-bold text-md text-[var(--primary-yellow)]">{shoe?.price?.toLocaleString('vi-VN')}₫</span>
      </div>
    </div>
  );
};

export default CardShoes;
