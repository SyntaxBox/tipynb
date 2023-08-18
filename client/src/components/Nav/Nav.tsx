import { IconBrandGithub } from "@tabler/icons-react";
import { IconButton, Container } from "../../ui";
import { iconStroke, iconsSize } from "../../shared";
import Logo from "../Logo/Logo";
import DarkModeButton from "../DarkMode/DarkMode";

function Nav() {
  return (
    <Container className=" flex items-center justify-between">
      <Logo height={48} />
      <div className="flex items-center justify-center gap-3">
        <a
          href="https://github.com/qhamid/tipynb"
          target="_blank"
          data-testid="github-repo"
        >
          <IconButton title="Github repo">
            <IconBrandGithub size={iconsSize} stroke={iconStroke} />
          </IconButton>
        </a>
        <div data-testid="toggle-dark-mode">
          <IconButton title="toggle dark mode">
            <DarkModeButton />
          </IconButton>
        </div>
      </div>
    </Container>
  );
}

export default Nav;
