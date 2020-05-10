import React from 'react';

function CardTitle(props: { title: string }) {
  const { title } = props;
  return (
    <h2 className="card-title" style={{ marginLeft: 10, paddingBottom: 15 }}>
      {title}
    </h2>
  );
}

export default CardTitle;
