import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/providers/auth";
import { cn } from "@/lib/utils";
import { Header } from "@/components/shared/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Crunchyroll",
	description: "Generated by create next app"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br" suppressHydrationWarning>
			<body className={cn("dark", inter.className)}>
				<AuthProvider>
					<Header />
					{children}
				</AuthProvider>
			</body>
		</html>
	);
}
