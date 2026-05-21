import React, { useState } from "react";

const categories = ["U14", "U16", "U18", "U20", "Senior"];

export default function Effectif() {
  const [editMode, setEditMode] = useState(false);
  const [totalClub, setTotalClub] = useState(50);
  const [catData, setCatData] = useState({
    U14: { mTotal: 8, mLicensed: 6, fTotal: 6, fLicensed: 5 },
    U16: { mTotal: 10, mLicensed: 8, fTotal: 8, fLicensed: 7 },
    U18: { mTotal: 12, mLicensed: 10, fTotal: 10, fLicensed: 9 },
    U20: { mTotal: 9, mLicensed: 7, fTotal: 7, fLicensed: 6 },
    Senior: { mTotal: 15, mLicensed: 12, fTotal: 13, fLicensed: 11 },
  });
  const [selectedCat, setSelectedCat] = useState(null);

  const mTotal = categories.reduce((sum, cat) => sum + catData[cat].mTotal, 0);
  const fTotal = categories.reduce((sum, cat) => sum + catData[cat].fTotal, 0);
  const totalLicensed = categories.reduce(
    (sum, cat) => sum + catData[cat].mLicensed + catData[cat].fLicensed,
    0,
  );

  const updateCat = (cat, field, value) => {
    setCatData((prev) => ({
      ...prev,
      [cat]: { ...prev[cat], [field]: parseInt(value) || 0 },
    }));
  };

  const handleValider = () => {
    setEditMode(false);
  };

  const handleEdit = () => {
    setEditMode(true);
    setSelectedCat(null);
  };

  const catTotal = selectedCat
    ? catData[selectedCat].mTotal + catData[selectedCat].fTotal
    : 0;
  const mLicensedPercent = catData[selectedCat]
    ? Math.round(
        (catData[selectedCat].mLicensed / catData[selectedCat].mTotal) * 100,
      ) || 0
    : 0;
  const fLicensedPercent = catData[selectedCat]
    ? Math.round(
        (catData[selectedCat].fLicensed / catData[selectedCat].fTotal) * 100,
      ) || 0
    : 0;

  return (
    <div className="flex-1 flex flex-col min-w-0">
      {/* Header */}
      <div className="px-6 py-4 border-b border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark">
        <h1 className="text-2xl font-black text-text-primary-light dark:text-text-primary-dark">
          Effectif
        </h1>
        <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
          Total du club par sexe et catégorie avec licences
        </p>
      </div>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {!editMode ? (
          <>
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
                <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark mb-2">
                  Total Club
                </h3>
                <p className="text-3xl font-black text-blue-text">
                  {totalClub}
                </p>
              </div>
              <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
                <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark mb-2">
                  Garçons
                </h3>
                <p className="text-3xl font-bold text-blue-600">{mTotal}</p>
              </div>
              <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
                <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark mb-2">
                  Filles
                </h3>
                <p className="text-3xl font-bold text-pink-600">{fTotal}</p>
              </div>
            </div>

            {/* Category Cards */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark mb-6">
                Par catégorie
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {categories.map((cat) => {
                  const total = catData[cat].mTotal + catData[cat].fTotal;
                  const licensed =
                    catData[cat].mLicensed + catData[cat].fLicensed;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCat(cat)}
                      className="bg-gradient-to-r from-blue-text/90 to-orange-basket/90 text-white p-6 rounded-xl font-semibold hover:shadow-xl transition-all shadow-lg"
                    >
                      <div className="text-xl mb-2">{cat}</div>
                      <div className="text-2xl font-black">{total}</div>
                      <div className="text-xs opacity-90 mt-1">
                        {licensed} licenciés
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Category */}
            {selectedCat && (
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <button
                    onClick={() => setSelectedCat(null)}
                    className="bg-gradient-to-r from-gray-500 to-gray-600 text-white py-2 px-4 rounded-xl font-semibold hover:shadow-lg transition-all shadow-md flex-shrink-0"
                  >
                    ← Retour
                  </button>
                  <h3 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">
                    {selectedCat} ({catTotal} joueurs)
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-b from-blue-500/10 p-6 rounded-xl border">
                    <h4 className="font-bold text-xl text-blue-text mb-4">
                      Garçons
                    </h4>
                    <p>
                      Total:{" "}
                      <span className="font-black">
                        {catData[selectedCat].mTotal}
                      </span>
                    </p>
                    <p>
                      Licenciés:{" "}
                      <span className="font-black text-green-600">
                        {catData[selectedCat].mLicensed}
                      </span>{" "}
                      ({mLicensedPercent}%)
                    </p>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mt-2">
                      <div
                        className="bg-green-500 h-3 rounded-full"
                        style={{ width: `${mLicensedPercent}%` }}
                      />
                    </div>
                  </div>
                  <div className="bg-gradient-to-b from-pink-500/10 p-6 rounded-xl border">
                    <h4 className="font-bold text-xl text-pink-600 mb-4">
                      Filles
                    </h4>
                    <p>
                      Total:{" "}
                      <span className="font-black">
                        {catData[selectedCat].fTotal}
                      </span>
                    </p>
                    <p>
                      Licenciés:{" "}
                      <span className="font-black text-green-600">
                        {catData[selectedCat].fLicensed}
                      </span>{" "}
                      ({fLicensedPercent}%)
                    </p>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mt-2">
                      <div
                        className="bg-green-500 h-3 rounded-full"
                        style={{ width: `${fLicensedPercent}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-center mt-12">
              <button
                onClick={handleEdit}
                className="bg-gradient-to-r from-blue-text to-orange-basket text-white py-3 px-8 rounded-xl font-semibold hover:shadow-lg transition-all shadow-md"
              >
                Éditer Effectif
              </button>
            </div>
          </>
        ) : (
          <div>
            <h3 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark mb-6">
              Édition Effectif
            </h3>

            <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-border-light dark:border-border-dark mb-6">
              <label className="block text-sm font-bold text-text-primary-light dark:text-text-primary-dark mb-3">
                Total Club
              </label>
              <input
                type="number"
                value={totalClub}
                onChange={(e) => setTotalClub(parseInt(e.target.value) || 0)}
                className="w-full p-4 border border-border-light dark:border-border-dark rounded-xl bg-white dark:bg-card-dark text-text-primary-light dark:text-text-primary-dark focus:border-blue-text focus:ring-2 focus:ring-blue-text/20 text-lg font-mono"
              />
            </div>

            <div className="space-y-6 mb-12">
              {categories.map((cat) => (
                <div
                  key={cat}
                  className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-border-light dark:border-border-dark"
                >
                  <h4 className="font-bold text-lg text-text-primary-light dark:text-text-primary-dark mb-4">
                    {cat}
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-text-primary-light dark:text-text-primary-dark mb-2">
                        M Total
                      </label>
                      <input
                        type="number"
                        value={catData[cat].mTotal}
                        onChange={(e) =>
                          updateCat(cat, "mTotal", e.target.value)
                        }
                        className="w-full p-3 border border-border-light dark:border-border-dark rounded-lg text-text-primary-light dark:text-text-primary-dark bg-white dark:bg-card-dark focus:border-blue-text font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-text-primary-light dark:text-text-primary-dark mb-2">
                        M Lic.
                      </label>
                      <input
                        type="number"
                        value={catData[cat].mLicensed}
                        onChange={(e) =>
                          updateCat(cat, "mLicensed", e.target.value)
                        }
                        className="w-full p-3 border border-border-light dark:border-border-dark rounded-lg text-text-primary-light dark:text-text-primary-dark bg-white dark:bg-card-dark focus:border-blue-text font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-text-primary-light dark:text-text-primary-dark mb-2">
                        F Total
                      </label>
                      <input
                        type="number"
                        value={catData[cat].fTotal}
                        onChange={(e) =>
                          updateCat(cat, "fTotal", e.target.value)
                        }
                        className="w-full p-3 border border-border-light dark:border-border-dark rounded-lg text-text-primary-light dark:text-text-primary-dark bg-white dark:bg-card-dark focus:border-blue-text font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-text-primary-light dark:text-text-primary-dark mb-2">
                        F Lic.
                      </label>
                      <input
                        type="number"
                        value={catData[cat].fLicensed}
                        onChange={(e) =>
                          updateCat(cat, "fLicensed", e.target.value)
                        }
                        className="w-full p-3 border border-border-light dark:border-border-dark rounded-lg text-text-primary-light dark:text-text-primary-dark bg-white dark:bg-card-dark focus:border-blue-text font-mono"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={handleValider}
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:shadow-2xl transition-all shadow-xl"
              >
                Valider
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
