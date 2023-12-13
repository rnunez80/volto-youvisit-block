export const YouVisitSchema = (props) => {
  const {intl} = props;

  return {
    title: 'Countdown Block',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['tourID', 'tourVersion', 'tourHeight'],
      },
    ],

    properties: {
      tourID: {
        title: 'Tour Number',
        default: '60020',
        required: true,
      },
      tourHeight: {
        title: 'height',
        default: '300px',
        required: true,
      },
      tourVersion: {
        title: 'Tour Version',
        default: '2023.23.0',
        required: true,
      },
    },
    required: [],
  };
};
