import { GenreResponseProps } from "../App";
import { Button } from "./Button";

interface SidebarProps {
  genres: GenreResponseProps[]
  selectedGenreId: number,
  handleClick: (id: number) => void
}

export function SideBar({ genres, selectedGenreId, handleClick }: SidebarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClick(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}