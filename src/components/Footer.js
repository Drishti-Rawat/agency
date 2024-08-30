import React from "react";
import { Twitter, Youtube, Linkedin, Instagram } from "lucide-react";
import { Locate, Mail, MapPin, Phone } from "lucide-react";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-gray-300 py-8 px-4 md:px-8">
      <div className="max-w-5xl mx-auto mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
              <span className="text-white font-bold text-xl">AGENCE.</span>
            </div>
            <p className="text-sm">
              Auctor blandit dolorom primis eius odit soluta molestie? Malesuada
              elementum aut doloremque labo.
            </p>
            <div className="flex space-x-4">
              <SocialIcon Icon={Twitter} color="bg-primary" />
              <SocialIcon Icon={Youtube} color="bg-primary" />
              <SocialIcon Icon={Linkedin} color="bg-primary" />

              <SocialIcon Icon={Instagram} color="bg-primary" />
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  News & Articles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Legal Notice
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Parent Community
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Contact Information
            </h3>
            <p className="text-sm mb-2">Feel free to contact & reach us !!</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <MapPin size={20} color="red" />
                <span>3557 Derek Drive, Orlando, Florida</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={20} color="red" />
                <span>+1(456)657-887</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={20} color="red" />
                <span>info@domain.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-center">
          <p>&copy; 2022 Agence. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
