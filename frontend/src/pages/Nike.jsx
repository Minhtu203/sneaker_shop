import { getNikeShoes } from '@/api/nikeApi';
import { CreateAxios } from '@/lib/axios';
import { useUserState } from '@/store/userState';
import CardShoes from '@/utils/CardShoes';
import { useEffect, useState } from 'react';
import { WrapperShoes } from './Home';
export default function Nike() {
  useEffect(() => {
    document.title = 'Nike';
  }, []);

  const { userInfo, setUserInfo } = useUserState();
  const [allShoes, setAllShoes] = useState([]);
  let axiosJWT = CreateAxios(userInfo, setUserInfo);
  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const data = await getNikeShoes(axiosJWT, userInfo?.accessToken);
        setAllShoes(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchShoes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <WrapperShoes>
      {allShoes?.data?.data?.map((shoe) => (
        <CardShoes key={shoe._id} shoe={shoe} />
      ))}
    </WrapperShoes>
  );
}
