export default interface MovieModel {
  Movie_id: string;
  Title: string;
  Rating: number;
  TotalVotes: number;
  MetaCritic: number;
  Budget: number;
  Runtime: string;
  genre?: string;
  genres?: string;
}
