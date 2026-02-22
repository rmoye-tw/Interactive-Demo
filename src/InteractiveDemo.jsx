import { useState } from 'react'

// ─── Icons ────────────────────────────────────────────────────────────────────

function StarIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.37 2.45c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.643 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69L9.049 2.927z" />
    </svg>
  )
}

function CheckIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )
}

function XIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  )
}

function VideoIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
    </svg>
  )
}

function TourIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
    </svg>
  )
}

function ClockIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
    </svg>
  )
}

function BookOpenIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
    </svg>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const TOPICS = [
  'How to Refer a Client',
  'Understanding Estate Plan Types',
  'Having the Estate Planning Conversation',
  'Revenue & Premium Plan',
  'Compliance & BD Requirements',
  'Client Experience Walkthrough',
  'Using the Advisor Dashboard',
]

function buildContent(topicName) {
  return [
    {
      id: `${topicName}-video`,
      type: 'video',
      title: `${topicName} — Overview`,
      duration: '2 min 30 sec',
      durationSeconds: 150,
    },
    {
      id: `${topicName}-tour`,
      type: 'tour',
      title: `Take a Tour: ${topicName}`,
      duration: '2 min 30 sec',
      durationSeconds: 150,
    },
  ]
}

const TOPIC_DATA = TOPICS.map((name) => ({
  id: name,
  name,
  content: buildContent(name),
}))

// ─── Rating config ─────────────────────────────────────────────────────────────

const RATINGS = [
  {
    key: 'very',
    label: 'Very Important',
    shortLabel: 'Very',
    Icon: StarIcon,
    activeRing: 'ring-2 ring-emerald-500',
    activeBg: 'bg-emerald-50',
    activeIcon: 'text-emerald-600',
    inactiveIcon: 'text-emerald-400',
    activeText: 'text-emerald-700',
    selectAllColor: 'text-emerald-600 hover:text-emerald-800',
    headerBg: 'bg-emerald-50',
    headerBorder: 'border-emerald-200',
    headerText: 'text-emerald-700',
  },
  {
    key: 'somewhat',
    label: 'Somewhat Important',
    shortLabel: 'Somewhat',
    Icon: CheckIcon,
    activeRing: 'ring-2 ring-amber-400',
    activeBg: 'bg-amber-50',
    activeIcon: 'text-amber-600',
    inactiveIcon: 'text-amber-400',
    activeText: 'text-amber-700',
    selectAllColor: 'text-amber-600 hover:text-amber-800',
    headerBg: 'bg-amber-50',
    headerBorder: 'border-amber-200',
    headerText: 'text-amber-700',
  },
  {
    key: 'not',
    label: 'Not Important',
    shortLabel: 'Not',
    Icon: XIcon,
    activeRing: 'ring-2 ring-slate-400',
    activeBg: 'bg-slate-100',
    activeIcon: 'text-slate-500',
    inactiveIcon: 'text-slate-300',
    activeText: 'text-slate-600',
    selectAllColor: 'text-slate-500 hover:text-slate-700',
    headerBg: 'bg-slate-50',
    headerBorder: 'border-slate-200',
    headerText: 'text-slate-600',
  },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatTotalDuration(seconds) {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60
  if (h > 0) return `${h}h ${m}m ${s}s`
  if (m > 0 && s > 0) return `${m} min ${s} sec`
  if (m > 0) return `${m} min`
  return `${s} sec`
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function RatingCell({ topicId, rating, selected, onSelect }) {
  const { Icon, activeRing, activeBg, activeIcon, inactiveIcon, activeText, label } = rating
  const isActive = selected === rating.key

  return (
    <td className="py-2 px-2 text-center">
      <button
        onClick={() => onSelect(topicId, rating.key)}
        aria-label={`${label} for topic`}
        aria-pressed={isActive}
        className={`
          inline-flex flex-col items-center justify-center gap-0.5
          w-20 py-2 px-1 rounded-lg border transition-all duration-150
          focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1
          ${isActive
            ? `${activeBg} ${activeRing} border-transparent shadow-sm`
            : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
          }
        `}
      >
        <Icon className={`w-5 h-5 ${isActive ? activeIcon : inactiveIcon}`} />
        <span className={`text-[10px] font-medium leading-tight ${isActive ? activeText : 'text-slate-400'}`}>
          {rating.shortLabel}
        </span>
      </button>
    </td>
  )
}

function ContentItem({ item }) {
  const isVideo = item.type === 'video'
  return (
    <div className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-slate-50 transition-colors group">
      <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${isVideo ? 'bg-blue-100' : 'bg-violet-100'}`}>
        {isVideo
          ? <VideoIcon className="w-4 h-4 text-blue-600" />
          : <TourIcon className="w-4 h-4 text-violet-600" />
        }
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-slate-800 truncate group-hover:text-slate-900">
          {item.title}
        </p>
        <div className="flex items-center gap-1 mt-0.5">
          <span className={`text-[10px] font-semibold uppercase tracking-wide px-1.5 py-0.5 rounded ${isVideo ? 'bg-blue-50 text-blue-600' : 'bg-violet-50 text-violet-600'}`}>
            {isVideo ? 'Video' : 'Tour'}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-1 text-slate-400 flex-shrink-0">
        <ClockIcon className="w-3.5 h-3.5" />
        <span className="text-xs">{item.duration}</span>
      </div>
    </div>
  )
}

function TopicSection({ topic, ratingKey, index }) {
  const ratingConfig = RATINGS.find((r) => r.key === ratingKey)
  const { Icon, activeIcon, headerBg, headerBorder, headerText } = ratingConfig

  return (
    <div className="mb-4 rounded-xl border border-slate-200 overflow-hidden shadow-sm">
      <div className={`flex items-center gap-2 px-4 py-2.5 border-b ${headerBg} ${headerBorder}`}>
        <span className="text-xs font-semibold text-slate-400 w-5 text-center">{index + 1}</span>
        <Icon className={`w-4 h-4 ${activeIcon} flex-shrink-0`} />
        <h3 className={`text-sm font-semibold ${headerText} flex-1 truncate`}>{topic.name}</h3>
      </div>
      <div className="bg-white divide-y divide-slate-50">
        {topic.content.map((item) => (
          <ContentItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

function EmptyTrack() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-16 px-6 text-center">
      <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
        <BookOpenIcon className="w-8 h-8 text-slate-300" />
      </div>
      <p className="text-slate-500 font-medium text-sm">Your learning track will appear here</p>
      <p className="text-slate-400 text-xs mt-1">Rate topics on the left to build your path</p>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function InteractiveDemo() {
  const [ratings, setRatings] = useState({}) // { [topicId]: 'very' | 'somewhat' | 'not' }

  const allRated = TOPIC_DATA.every((t) => ratings[t.id] !== undefined)
  const ratedCount = Object.keys(ratings).length

  function handleRate(topicId, ratingKey) {
    setRatings((prev) => ({ ...prev, [topicId]: ratingKey }))
  }

  function handleSelectAll(ratingKey) {
    const next = {}
    TOPIC_DATA.forEach((t) => { next[t.id] = ratingKey })
    setRatings(next)
  }

  // Build right-panel data: very first, then somewhat; skip not
  const veryTopics = TOPIC_DATA.filter((t) => ratings[t.id] === 'very')
  const somewhatTopics = TOPIC_DATA.filter((t) => ratings[t.id] === 'somewhat')
  const trackTopics = [...veryTopics, ...somewhatTopics]

  const totalSeconds = trackTopics.reduce(
    (acc, t) => acc + t.content.reduce((s, c) => s + c.durationSeconds, 0),
    0
  )

  const hasTrack = trackTopics.length > 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900">Build Your Learning Track</h1>
          <p className="text-slate-500 text-sm mt-1">
            Rate each topic by importance to create your personalized learning path.
          </p>
        </div>

        {/* Two-panel layout */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">

          {/* ── Left panel: Topic rating table ─────────────────────────────── */}
          <div className="w-full lg:w-[55%] bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            {/* Panel header */}
            <div className="px-5 py-4 border-b border-slate-100">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-semibold text-slate-800">Rate Topics</h2>
                <span className="text-xs text-slate-400 bg-slate-50 px-2 py-1 rounded-full border border-slate-200">
                  {ratedCount} / {TOPIC_DATA.length} rated
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="py-3 px-5 text-left text-xs font-semibold text-slate-400 uppercase tracking-wide w-auto">
                      Topic
                    </th>
                    {RATINGS.map((rating) => (
                      <th
                        key={rating.key}
                        className="py-3 px-2 text-center text-xs font-semibold text-slate-400 uppercase tracking-wide w-24"
                      >
                        <div className="flex flex-col items-center gap-1">
                          <span>{rating.shortLabel}</span>
                          <button
                            onClick={() => handleSelectAll(rating.key)}
                            className={`text-[10px] font-medium normal-case tracking-normal underline underline-offset-2 ${rating.selectAllColor} transition-colors`}
                          >
                            Select all
                          </button>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TOPIC_DATA.map((topic, i) => (
                    <tr
                      key={topic.id}
                      className={`border-b border-slate-50 transition-colors ${ratings[topic.id] ? 'bg-slate-50/40' : 'bg-white hover:bg-slate-50/60'}`}
                    >
                      <td className="py-3 px-5">
                        <div className="flex items-center gap-2">
                          {ratings[topic.id] ? (
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                          ) : (
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-200 flex-shrink-0" />
                          )}
                          <span className="text-sm font-medium text-slate-700 leading-snug">
                            {topic.name}
                          </span>
                        </div>
                      </td>
                      {RATINGS.map((rating) => (
                        <RatingCell
                          key={rating.key}
                          topicId={topic.id}
                          rating={rating}
                          selected={ratings[topic.id]}
                          onSelect={handleRate}
                        />
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* CTA button */}
            <div className="px-5 py-4 border-t border-slate-100 bg-slate-50/50">
              <button
                disabled={!allRated}
                className={`
                  w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-200
                  ${allRated
                    ? 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-sm hover:shadow-md cursor-pointer'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }
                `}
              >
                {allRated ? 'Continue to Your Learning Track →' : 'Rate all topics to continue'}
              </button>
              {!allRated && (
                <p className="text-center text-xs text-slate-400 mt-2">
                  {TOPIC_DATA.length - ratedCount} topic{TOPIC_DATA.length - ratedCount !== 1 ? 's' : ''} remaining
                </p>
              )}
            </div>
          </div>

          {/* ── Right panel: Learning track ─────────────────────────────────── */}
          <div className="w-full lg:w-[45%] bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden sticky top-8">
            {/* Panel header */}
            <div className="px-5 py-4 border-b border-slate-100 bg-gradient-to-r from-blue-600 to-violet-600">
              <h2 className="text-base font-semibold text-white">Your Learning Track</h2>
              {hasTrack ? (
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-blue-100 text-xs">
                    <span className="font-bold text-white">{trackTopics.length}</span> topic{trackTopics.length !== 1 ? 's' : ''}
                  </span>
                  <span className="text-blue-300 text-xs">•</span>
                  <div className="flex items-center gap-1 text-blue-100 text-xs">
                    <ClockIcon className="w-3 h-3" />
                    <span className="font-bold text-white">{formatTotalDuration(totalSeconds)}</span>
                    <span>total</span>
                  </div>
                </div>
              ) : (
                <p className="text-blue-200 text-xs mt-1">Rate topics to build your track</p>
              )}
            </div>

            {/* Section legend */}
            {hasTrack && (
              <div className="flex items-center gap-3 px-5 py-2.5 bg-slate-50 border-b border-slate-100">
                {veryTopics.length > 0 && (
                  <div className="flex items-center gap-1.5">
                    <StarIcon className="w-3 h-3 text-emerald-500" />
                    <span className="text-xs text-slate-500 font-medium">{veryTopics.length} Very Important</span>
                  </div>
                )}
                {veryTopics.length > 0 && somewhatTopics.length > 0 && (
                  <span className="text-slate-300 text-xs">·</span>
                )}
                {somewhatTopics.length > 0 && (
                  <div className="flex items-center gap-1.5">
                    <CheckIcon className="w-3 h-3 text-amber-500" />
                    <span className="text-xs text-slate-500 font-medium">{somewhatTopics.length} Somewhat Important</span>
                  </div>
                )}
              </div>
            )}

            {/* Track content */}
            <div className="p-4 overflow-y-auto max-h-[600px]">
              {hasTrack ? (
                <>
                  {veryTopics.length > 0 && (
                    <div className="mb-2">
                      <div className="flex items-center gap-2 mb-2 px-1">
                        <StarIcon className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Very Important</span>
                      </div>
                      {veryTopics.map((topic, i) => (
                        <TopicSection key={topic.id} topic={topic} ratingKey="very" index={i} />
                      ))}
                    </div>
                  )}
                  {somewhatTopics.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-2 px-1">
                        <CheckIcon className="w-3.5 h-3.5 text-amber-500" />
                        <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Somewhat Important</span>
                      </div>
                      {somewhatTopics.map((topic, i) => (
                        <TopicSection key={topic.id} topic={topic} ratingKey="somewhat" index={i} />
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <EmptyTrack />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
