import Genre from "./Genre";
import Platform from "./Platform";
import Publisher from "./Publisher";

export default interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  genres: Genre[];
  publishers: Publisher[];
  metacritic: number;
  rating_top: number;
}
