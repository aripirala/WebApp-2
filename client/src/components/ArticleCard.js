import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { FaEye, FaThumbsUp } from 'react-icons/fa';

const Card = styled.div`
  background: ${(props) => props.theme.colors.cardBackground};
  padding: 20px;
  margin: 5px 0; /* Reduced margin for less distance between cards */
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px; /* Fixed height for all cards */
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGray}; /* Added bottom border for separation */

  &:last-child {
    border-bottom: none; /* Remove bottom border for the last card */
  }
`;

const Title = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.2em;
  margin-bottom: 10px;
`;

const Category = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 0.9em;
  margin-bottom: 10px;
`;

const ContentPreview = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 0.9em;
  flex-grow: 1;
`;

const Metadata = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const Tag = styled.span`
  background: ${(props) => props.theme.colors.lightBackground};
  padding: 5px 10px;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.secondary};
  font-size: 0.8em;
`;

const Views = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.secondary};
  font-size: 0.8em;
`;

const Likes = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.secondary};
  font-size: 0.8em;
`;

const ArticleCard = ({ article }) => {
  return (
    <Link href={`/article/${article._id}`} passHref>
      <Card>
        <div>
          <Title>{article.title}</Title>
          <Category>{article.category}</Category>
          <ContentPreview>{article.content.substring(0, 100)}...</ContentPreview>
        </div>
        <Metadata>
          <Tags>
            {article.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </Tags>
          <Views>
            <FaEye style={{ marginRight: '5px' }} />
            {article.views}
          </Views>
          <Likes>
            <FaThumbsUp style={{ marginRight: '5px' }} />
            {article.likes}
          </Likes>
        </Metadata>
      </Card>
    </Link>
  );
};

export default ArticleCard;
