import iconJwt from '../assets/images/jwt-medium.png';
import { useAppSelector } from '../hooks/redux';

interface IJwtIcon {
  style: 'skill' | 'stack';
}

export const JwtIcon = ({ style }: IJwtIcon) => {
  const { language } = useAppSelector((state) => state.languageReducer);

  const jwtStyleSkill = {
    width: '65px',
    height: '65px',
  };

  const jwtStyleStack = {
    width: '28px',
    height: '28px',
  };

  const describe = {
    ru: 'Изучил работу с JWT токенами, понимаю для чего это нужно, реализовал API c созданием и отправкой JWT токена пользователю и затем последующей валидацей токена.',
    en: 'I learnd working with JWT tokens, I understand why it is needed, I implemented an API with the creation and sending of a JWT token to the user and then the subsequent validation of the token.',
  };

  if (style === 'skill') {
    return (
      <div className="skills-content__item">
        <div className="skills-content__item-icon">
          <img style={jwtStyleSkill} src={iconJwt} alt="jwt" />
        </div>
        <div className="skills-content__item-description">
          {describe[language]}
        </div>
      </div>
    );
  }

  return <img style={jwtStyleStack} src={iconJwt} alt="jwt" />;
};
