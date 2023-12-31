import { gql } from "@apollo/client";

export const GET_BLOGS_INFO = gql`
  query {
    posts {
      author {
        ... on Author {
          name
          slug
          avatar {
            url
          }
        }
      }
      title
      slug
      id
      coverPhoto {
        url
        publishedAt
      }
    }
  }
`;

export const GET_AUTHORS_INFO = gql`
  query {
    authors {
      name
      id
      slug
      avatar {
        url
      }
    }
  }
`;

export const GET_AUTHOR_INFO = gql`
  query GetAuthor($slug: String!) {
    author(where: { slug: $slug }) {
      name
      field
      description {
        html
      }
      avatar {
        url
      }
      posts {
        slug
        title
        id
        coverPhoto {
          url
        }
      }
    }
  }
`;

export const GET_POST_INFO = gql`
  query GetPost($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        ... on Author {
          name
          avatar {
            url
          }
          field
        }
      }
      datePublished
      content {
        html
      }
      coverPhoto {
        url
      }
      title
    }
  }
`;

export const GET_POST_COMMENTS = gql`
  query getComments($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      id
      name
      text
    }
  }
`;
