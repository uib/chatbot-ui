import { IconExternalLink } from '@tabler/icons-react';
import { useContext } from 'react';

import { useTranslation } from 'next-i18next';

import { OpenAIModel } from '@/types/openai';

import HomeContext from '@/pages/api/home/home.context';

export const UiTInfo = () => {
  const { t } = useTranslation('chat');

  const {
    state: { selectedConversation, models, defaultModelId },
    handleUpdateConversation,
    dispatch: homeDispatch,
  } = useContext(HomeContext);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    selectedConversation &&
      handleUpdateConversation(selectedConversation, {
        key: 'model',
        value: models.find(
          (model) => model.id === e.target.value,
        ) as OpenAIModel,
      });
  };

  return (
    <div className="flex flex-col">
      <label className="mb-2 text-left text-neutral-700 dark:text-neutral-400">
        {t('Info')}
      </label>
      <span className="text-[12px] text-black/50 dark:text-white/50 text-sm">
        {t(
          'This is a beta service. AI chat bots will sometimes make up answers that sound correct, but has no root in reality. This is called hallucination. Never trust a machine!',
        )}
      </span>
      <div className="w-full mt-3 text-left text-neutral-700 dark:text-neutral-400 flex items-center">
        <a
          href="https://uit.topdesk.net/tas/public/ssp/content/detail/service?unid=5a3379b4e20e4a72bd4903f58e214ca1&from=8acda9fd-7dd9-4914-8cc2-d2cf5f5a5a26"
          target="_blank"
          className="flex items-center"
        >
          <IconExternalLink size={18} className={'inline mr-1'} />
          {t('Read more about hallucinations')}
        </a>
      </div>
    </div>
  );
};
