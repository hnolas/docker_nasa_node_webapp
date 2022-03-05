import { render, screen } from '@testing-library/react';
import App from './App';
import { normalizeData } from './utils/helper';

test('Renders app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Spacestagram/i);
  expect(linkElement).toBeInTheDocument();
});


test('normalizer function works', () => {
  const data = {
    0:{
      copyright: "Matt HarbisonSpace4Everybody",
      date: "2022-01-11",
      explanation: "You may have seen Orion's belt before",
      hdurl: "https://apod.nasa.gov/apod/image/2201/OrionStarFree3_Harbison_5000.jpg",
      media_type: "image",
      service_version: "v1",
      title: "Orion's Belt Region in Gas and Dust",
      url: "https://apod.nasa.gov/apod/image/2201/OrionStarFree3_Harbison_1080.jpg",
    },
    1:{
      copyright: "Matt HarbisonSpace4Everybody",
      date: "2022-01-11",
      explanation: "You may have seen Orion's belt before",
      hdurl: "https://apod.nasa.gov/apod/image/2201/OrionStarFree3_Harbison_5000.jpg",
      media_type: "image",
      service_version: "v1",
      title: "Orion's Belt Region in Gas and Dust",
      url: "https://apod.nasa.gov/apod/image/2201/OrionStarFree3_Harbison_1080.jpg",
    }
  }
  const outcome = {
    "2022-01-11":{
      copyright: "Matt HarbisonSpace4Everybody",
      date: "2022-01-11",
      explanation: "You may have seen Orion's belt before",
      hdurl: "https://apod.nasa.gov/apod/image/2201/OrionStarFree3_Harbison_5000.jpg",
      media_type: "image",
      service_version: "v1",
      liked: false,
      title: "Orion's Belt Region in Gas and Dust",
      url: "https://apod.nasa.gov/apod/image/2201/OrionStarFree3_Harbison_1080.jpg",
    },
    "2022-01-11":{
      copyright: "Matt HarbisonSpace4Everybody",
      date: "2022-01-11",
      explanation: "You may have seen Orion's belt before",
      hdurl: "https://apod.nasa.gov/apod/image/2201/OrionStarFree3_Harbison_5000.jpg",
      media_type: "image",
      liked: false,
      service_version: "v1",
      title: "Orion's Belt Region in Gas and Dust",
      url: "https://apod.nasa.gov/apod/image/2201/OrionStarFree3_Harbison_1080.jpg",
    }
  }

  expect(normalizeData(data)).toEqual(outcome);
});