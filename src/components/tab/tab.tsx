import { MouseEvent, useState } from 'react';
import { TabProps } from './tab.types';

import * as S from './tab.styles';
import loadLangText from '@/utils/textconvert';
import Typography from '../typography/typography';

const Tab = ({ data }: TabProps) => {
  const [currentTab, setCurrentTab] = useState(
    String(data[data.length - 1].id)
  );
  const handleClickTab = (event: MouseEvent<HTMLButtonElement>) => {
    const target: any = event.target;
    setCurrentTab(target.id);
  };
  return (
    <>
      <S.TabContainer>
        <aside>
          {data.reverse().map((item) => (
            <button
              id={String(item.id)}
              key={String(item.id)}
              className={`${currentTab === String(item.id) ? 'active' : ''}`}
              onClick={handleClickTab}
            >
              {loadLangText(item.company.id, item.company.messageDefault)}
            </button>
          ))}
        </aside>

        <S.TabContent>
          {data.reverse().map(
            (item) =>
              currentTab === String(item.id) && (
                <section key={item.company.id}>
                  <Typography
                    className='title'
                    htmlElement='h4'
                    translateId={item.work.position.id}
                    messageDefault={item.work.position.messageDefault}
                  />
                  <div className='company-container'>
                    <Typography
                      className='subtitle-small'
                      htmlElement='p'
                      translateId={item.company.id}
                      messageDefault={item.company.messageDefault}
                    />

                    <Typography
                      className='subtitle-small'
                      htmlElement='p'
                      translateId={item.work.date.id}
                      messageDefault={item.work.date.messageDefault}
                    />
                  </div>

                  <div className='description-container'>
                    {item.work.descriptions.map((item) => (
                      <Typography
                        key={item.id}
                        className='subtitle-medium'
                        htmlElement='span'
                        translateId={item.id}
                        messageDefault={item.messageDefault}
                      />
                    ))}
                  </div>
                </section>
              )
          )}
        </S.TabContent>
      </S.TabContainer>
    </>
  );
};

export default Tab;
