import Image from "next/image";
import Link from "next/link";
import { DefaultArea } from "../default-area";
import { BookmarkIcon, ChevronDownIcon, SearchIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const navItems = [
	{ name: "Explorar", href: "/", isDropdown: true },
	{ name: "Manga", href: "/manga", isDropdown: false },
	{ name: "Jogos", href: "/games", isDropdown: false },
	{ name: "Notícias", href: "/news", isDropdown: true }
];

export const Header = () => {
	return (
		<header className="bg-slate-800">
			<DefaultArea className="flex h-[60px] items-center justify-between">
				<div className="flex items-center gap-8">
					<Link href="/">
						<Image
							src="/crunchyroll-logo.svg"
							alt="Crunchyroll"
							width={160}
							height={40}
						/>
					</Link>
					<nav>
						<ul className="flex gap-6 items-center justify-center text-lg">
							{navItems.map((item, i) => (
								<li key={i} className="flex items-center gap-2 group">
									<Link href={item.href}>{item.name}</Link>
									{item.isDropdown && (
										<ChevronDownIcon className="size-4 cursor-pointer group:hover:-rotate-180 transition-all duration-300" />
									)}
								</li>
							))}
						</ul>
					</nav>
				</div>
				<div className="flex gap-4">
					<Button
						size="icon"
						variant="link"
						className="text-white hover:text-primary"
					>
						<SearchIcon className="size-6" />
					</Button>
					<Button
						size="icon"
						variant="link"
						className="text-white hover:text-primary"
					>
						<BookmarkIcon className="size-6" />
					</Button>
					<div className="flex gap-2 items-center cursor-pointer">
						<Avatar>
							<AvatarImage src="/profile-picture.png" />
							<AvatarFallback>User</AvatarFallback>
						</Avatar>
						<ChevronDownIcon className="size-4 cursor-pointer hover:-rotate-180 transition-all duration-300" />
					</div>
				</div>
			</DefaultArea>
		</header>
	);
};
