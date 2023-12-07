import React from"react";

export default function EnterHeader(){
    return (
        <div>
            <nav className="flex sm:justify-center space-x-4">
            {[
            ['Get Started', '/'],
            ['Functions', '/projects'],
            ['Advantages', '/team'],
            ['Suggestions', '/reports'],
        ].map(([title, url]) => (
        <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
        ))}
        </nav>
        </div>
    );
}