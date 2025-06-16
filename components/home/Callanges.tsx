import { Cog, Globe, TrendingUp, Users } from 'lucide-react';
import React from 'react'

const Challenges = () => {
  return (
    <section className="py-16 lg:py-24 min-h-[70vh] flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              The Challenge of Physical Product Development
            </h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                Physical product development is a complex, iterative process
                requiring the right team members, effective information sharing,
                strategic marketing planning, and market traction.
              </p>
              <p>
                Founding teams are constantly busy bringing their products to
                life. A plug-and-play approach in key areas can significantly
                accelerate growth and reduce time-to-market.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <Users className="w-8 h-8 text-blue-600 mb-2" />
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Team Building
                  </h4>
                  <p className="text-sm text-gray-600">
                    Right talent acquisition
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <Globe className="w-8 h-8 text-green-600 mb-2" />
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Market Entry
                  </h4>
                  <p className="text-sm text-gray-600">Strategic positioning</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <Cog className="w-8 h-8 text-purple-600 mb-2" />
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Operations
                  </h4>
                  <p className="text-sm text-gray-600">Process optimization</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <TrendingUp className="w-8 h-8 text-orange-600 mb-2" />
                  <h4 className="font-semibold text-gray-900 mb-1">Growth</h4>
                  <p className="text-sm text-gray-600">Scalable solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Challenges;