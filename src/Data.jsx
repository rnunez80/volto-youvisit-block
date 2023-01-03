import React from 'react';
import { YouVisitSchema } from './Schema';
import { BlockDataForm } from '@plone/volto/components';
import { useIntl, defineMessages } from 'react-intl';

const messages = defineMessages({
  YouVisitBlock: {
    id: 'YouVisit Block',
    defaultMessage: 'YouVisit Block',
  },
});

const YouVisitData = (props) => {
  const { data, block, onChangeBlock, schemaEnhancer } = props;
  const intl = useIntl();
  const schema = schemaEnhancer
    ? schemaEnhancer(YouVisitSchema({ ...props, intl }), props)
    : YouVisitSchema({ ...props, intl });

  return (
    <BlockDataForm
      schema={schema}
      title='YouVisit Block'
      onChangeField={(id, value) => {
        onChangeBlock(block, {
          ...data,
          [id]: value,
        });
      }}
      formData={data}
      fieldIndex={data.index}
      block={block}
    />
  );
};

export default YouVisitData;
