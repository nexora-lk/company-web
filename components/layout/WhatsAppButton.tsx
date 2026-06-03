'use client';

import Photo from '@/components/ui/Photo';

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/message/STOET4IYSPY4B1"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed z-50 right-5 bottom-5 sm:right-6 sm:bottom-6 lg:right-10 lg:bottom-10 
                       w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16
                       bg-accent text-ondark 
                       rounded-full shadow-[0_8px_30px_rgb(20,24,26,0.4)] 
                       flex items-center justify-center 
                       transition-all duration-300 hover:scale-110 active:scale-95 group"
            aria-label="Contact us on WhatsApp"
        >
            <div className="relative w-6 h-6 sm:w-7 h-7 lg:w-8 h-8">
                <Photo
                    src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780457648/whatsapp_y6rlj3.svg"
                    alt="WhatsApp"
                    fill
                    sizes="40px"
                    className="object-contain"
                />
            </div>
            
            {/* Hover Label — following project's tooltip style */}
            <span className="absolute right-full mr-4 py-2 px-4 bg-ink text-ondark text-[11px] sm:text-xs rounded-full 
                             opacity-0 translate-x-2 pointer-events-none transition-all duration-300 
                             group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap shadow-xl border border-white/10">
                Speak with us
            </span>

            {/* Ripple effect following accent color */}
            <span className="absolute inset-0 rounded-full bg-accent/20 animate-ping -z-10 group-hover:hidden" />
        </a>
    );
}
