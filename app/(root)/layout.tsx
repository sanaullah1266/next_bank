export default function RootLayout({children,}:Readonly<{
    children : React.ReactNode;
}>){
return(
    <main>
        <h1>sidebar</h1>
 {children}
    </main>
)
}